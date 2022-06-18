// Next
import Head from "next/head"

// Styled components
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styled-components/globalStyles"
import { theme } from "../styled-components/theme"

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
