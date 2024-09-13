import { MediaScript } from '@frontmatter/extensibility';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

(async () => {
  const mediaScriptArgs = MediaScript.getArguments();

  if (!mediaScriptArgs) {
    MediaScript.done(`No arguments found`);
    return;
  }

  const imagePath = mediaScriptArgs.mediaPath;
  const thumbnailSize = 250; // Desired thumbnail size for the shortest side

  let image = sharp(imagePath);
  const extension = imagePath.split(`.`).pop();
  let newFilePath = imagePath.replace(`.${extension}`, `_thumbnail.${extension}`);

  try {
    const metadata = await image.metadata();
    const aspectRatio = metadata.width / metadata.height;

    let width, height;
    if (aspectRatio > 1) {
      // Landscape image
      width = thumbnailSize;
      height = Math.round(thumbnailSize / aspectRatio);
    } else {
      // Portrait or square image
      width = Math.round(thumbnailSize * aspectRatio);
      height = thumbnailSize;
    }

    await image
      .resize(width, height)
      .toFile(newFilePath);
    MediaScript.copyMetadataAndDelete(imagePath, newFilePath);

    // Update frontmatter of all posts
    const postsDirectory = path.join(process.cwd(), 'content', 'posts');
    const files = fs.readdirSync(postsDirectory);

    files.forEach(file => {
      const filePath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      if (data.image === imagePath) {
        data.image = newFilePath;
        const updatedContent = matter.stringify(content, data);
        fs.writeFileSync(filePath, updatedContent, 'utf8');
      }
    });

    MediaScript.done(`Thumbnail created at ${newFilePath} and frontmatter updated`);
  } catch (error) {
    MediaScript.done(`Error creating thumbnail: ${error.message}`);
  }
})();
