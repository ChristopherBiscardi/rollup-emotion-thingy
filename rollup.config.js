import babel from "rollup-plugin-babel";

const config = {
  input: "index.js",
  output: [
    {
      file: "dist.js",
      format: "cjs"
    }
  ],
  plugins: [
    babel({
      exclude: "node_modules/**"
    })
  ]
};

export default config;
