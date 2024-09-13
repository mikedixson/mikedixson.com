import { ContentScript } from '@frontmatter/extensibility';

(() => {
  const contentScriptArgs = ContentScript.getArguments();
  if (contentScriptArgs) {
    const { frontMatter: { title, slug }, answers } = contentScriptArgs;

    if (!answers) {
      ContentScript.askQuestions([{
        name: "platform",
        message: "Where do you want to share the article?",
        options: ["Twitter", "LinkedIn"]
      }]);
      return;
    }

    const platform = answers.platform;
    if (!platform) {
      ContentScript.done(`No platform provided`);
      return;
    }

    const url = `https://mikedixson.com${slug.startsWith("/") ? slug : `/${slug}`}`;
    let shareUrl = "";
    if (platform === "Twitter") {
      shareUrl = `http://twitter.com/share?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    } else if (platform === "LinkedIn") {
      shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`;
    }

    ContentScript.open(shareUrl);
  }
})();