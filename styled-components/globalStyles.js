import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

/* CSS RESET START */

/*
 Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}

/*
 Remove default margin
*/
* {
  margin: 0;
}

/*
 Remove default padding and font-weight
*/
body, h1, h2, h3, h4, h5, h6, p, small, ol, ul {
  padding: 0;
  font-weight: normal;
}

/*
 Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}

/*
  Typographic tweaks - add accessible line-height & improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/*
 Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/*
 Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}

/*
 Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/* Remove list styles (bullets/numbers) */
ol, ul, menu {
	list-style: none;
}

/*
 Create a root stacking context
*/
#__next {
  isolation: isolate;
  height: 100%;
}

/* CSS RESET END */

/* CUSTOM GLOBAL STYLES START */
body {
  font-family: 'Tahoma', sans-serif;
}

/* Remove @artsy/fresnel div box -> replaced by their pseudo-box and their child boxes */
/* Uncomment below if using @artsy/fresnel */
/* .fresnel-container {
    display: contents;
} */

/* CUSTOM GLOBAL STYLES END */

`

export default GlobalStyle
