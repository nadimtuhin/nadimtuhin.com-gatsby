import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

const theme = {
  ...Wordpress2016,
}

theme.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'h1,h2,h3,h4,h5,h6': {
    fontWeight: 700
  },
})

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography