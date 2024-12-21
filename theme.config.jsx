import { KasprLogo } from '@components/icons'

export default {
  project: {
    link: 'https://github.com/TotalWineLabs/kaspr'
  },
  logo: KasprLogo,
  footer: false,
  docsRepositoryBase: 'https://github.com/vmirz/kaspr-docs',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Kaspr" />
      <meta property="og:description" content="Event streaming for kubernetes" />
    </>
  )  
}