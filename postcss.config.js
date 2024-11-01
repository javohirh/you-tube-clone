export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-mantine": {},
    "postcss-simple-vars": {
      variables: {
        "mantine-breakpoint-xs": "320px",

        "mantine-breakpoint-md": "62em",
      },
    },
  },
};
