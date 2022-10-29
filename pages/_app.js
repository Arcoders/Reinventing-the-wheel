import "@fortawesome/fontawesome-svg-core/styles.css";
import { setTheme } from "../lib/StyledComponent";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

setTheme({
  brand: {
    primary: '#414345',
    secondary: 'a7a7a7',
  },
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
