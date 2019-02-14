import emoji from 'remark-emoji';

export default {
  base: "/docs/",
  title: 'EthDenver 2019',
  description: 'Documentation for EthDenver 2019',
  themeConfig: {
    logo: {
      src: '/docs/public/infura_logo_red.png',
      width: 100
    },
    colors: {
      primary: "#FF6B4A",
      white: "#f7f7f7",
      // sidebarBg: "#D4D4D4"
    },
    styles: {
      h1: {
        fontFamily: '"Poppins" serif'
      }
    }
  },
  mdPlugins: [emoji],
  public: './public'
}
