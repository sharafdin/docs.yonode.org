import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Yonode'
    }
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
