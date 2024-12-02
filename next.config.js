import nextra from 'nextra'

const nextConfig = {
  images: {
    unoptimized: true // mandatory, otherwise won't export
  },
  output: "export",
  basePath: '/docs',
}

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

export default withNextra(nextConfig)
