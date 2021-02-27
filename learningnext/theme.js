import { roboto } from '@theme-ui/presets'

const theme = {
  ...roboto,
  colors:{
    ...roboto.colors,
    text: '#ffffff',
    background: '#2b2727',
    primary: '#fdac40',
    secondary: '#a7f1e1',
    muted: '#f6f6f6',
  },
  containers: {
    card: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2,
    },
    page: {
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
    }
  },
  breakpoints: [
    '40em', '56em', '64em',
  ],
  styles: {
    ...roboto.styles
  }

}


export default theme