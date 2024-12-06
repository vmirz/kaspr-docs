import nextra from 'nextra'

const isProduction = process.env.NODE_ENV === "production";
const basePath = isProduction ? "/kaspr-docs" : "";
const output = isProduction ? "export": "standalone"

console.log(process.env.NODE_ENV);


const nextConfig = {
  images: {
    unoptimized: true // mandatory, otherwise won't export
  },
  output: output,
  basePath: basePath
}

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  latex: true,
  defaultShowCopyCode: true
})

export default withNextra(nextConfig)
