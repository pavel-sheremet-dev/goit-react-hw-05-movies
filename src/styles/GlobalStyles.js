import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


/* section {
  outline: 1px solid green;
} */

body {
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  font-size: 16px;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
button,
ul,
ol,
li {
  margin-top: 0;
  margin-bottom: 0;
}

ul {
  padding-left: 0;
  list-style: none;
}

hr {
  margin: 0;
  padding: 0;
}

img,
a, 
svg
 {
  display: block;
}

button {
  border: none;
}

.link {
  text-decoration: none;
  color: inherit;
}

.list {
  list-style: none;
}

.paragraph {
    margin-bottom: 10px;
  }

.bold-span {
    font-weight: 700;
  }
`;
