import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "node_modules/**",
      "vendor/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
