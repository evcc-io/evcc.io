import { defineConfig } from "sponsorkit";

const login = process.env.GITHUB_LOGIN;
const type = process.env.GITHUB_TYPE;

const preset = {
  avatar: { size: 40 },
  boxWidth: 50,
  boxHeight: 50,
  container: { sidePadding: 0 },
};

const tierStyles = {
  composeBefore: () => {},
  composeAfter: () => {},
  padding: { top: 0, bottom: 0 },
};

export default defineConfig({
  github: { login, type },
  name: "sponsors",
  outputDir: `static/img/github/${login}`,
  width: 800,
  padding: { top: 0, bottom: 0 },
  formats: ["svg"],
  tiers: [
    {
      // title: "one-time $150+"
      monthlyDollars: 150,
      isOneTime: true,
      preset: preset,
      composeBefore: () => {},
      composeAfter: () => {},
      ...tierStyles,
    },
    {
      // title: "monthly $5+",
      monthlyDollars: 5,
      preset: preset,
      composeBefore: () => {},
      composeAfter: () => {},
      ...tierStyles,
    },
    {
      // title: "others",
      compose: () => {},
      ...tierStyles,
    },
  ],
});
