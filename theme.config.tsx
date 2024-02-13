import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://docs.yonode.org" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "Yonode"} />
        <meta
          property="og:description"
          content={frontMatter.description || "The Node.js Toolkit for Rapid Development."}
        />
      </>
    );
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Yonode",
    };
  },
  logo: "Yonode",
  feedback: {
    content: "Question? Give us feedback →",
    labels: "Feedback",
  },
  project: {
    link: "https://github.com/sharafdin/yonode",
  },
  chat: {
    link: "https://discord.gg/GFUK9rS9",
  },
  docsRepositoryBase: "https://github.com/sharafdin/yonode",
  footer: {
    text: "Yonode - The Node.js Toolkit for Rapid Development.",
  },
};

export default config;
