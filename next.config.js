import path from 'node:path'
import nextra from 'nextra'

const isProduction = process.env.NODE_ENV === "production";
const basePath = isProduction ? "/kaspr-docs" : "/kaspr-docs";
const output = isProduction ? "export": "standalone"

console.log(process.env.NODE_ENV);

const sep = path.sep === '/' ? '/' : '\\\\'
const ALLOWED_SVG_REGEX = new RegExp(`components${sep}icons${sep}.+\\.svg$`)

const nextConfig = {
  images: {
    unoptimized: true // mandatory, otherwise won't export
  },
  output: output,
  basePath: basePath,
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test?.('.svg')
    )
    fileLoaderRule.exclude = ALLOWED_SVG_REGEX

    config.module.rules.push({
      test: ALLOWED_SVG_REGEX,
      use: ['@svgr/webpack']
    })
    return config
  },  
}

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  latex: true,
  defaultShowCopyCode: true
})

export { basePath }
export default withNextra(nextConfig)