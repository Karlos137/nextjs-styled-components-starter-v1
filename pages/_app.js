// Styled components imports
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../utils/styled-components/globalStyles"
import { theme } from "../utils/styled-components/theme"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Next.js website</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
