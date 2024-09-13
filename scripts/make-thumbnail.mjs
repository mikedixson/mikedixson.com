import { MediaScript } from '@frontmatter/extensibility';
import sharp from 'sharp';

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
    MediaScript.done(`Thumbnail created at ${newFilePath}`);
  } catch (error) {
    MediaScript.done(`Error creating thumbnail: ${error.message}`);
  }
})();
