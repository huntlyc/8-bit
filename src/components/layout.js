import React from "react"
import { createGlobalStyle } from "styled-components"
import { Link } from "gatsby"
import "typeface-heebo"

const GlobalStyle = createGlobalStyle`
:root {
  --backgroundColor: #1a1a1a;
  --mainFontColor: #dadada;
  --secondaryFontColor: #7c7c7c;
  --highlight: #00ffd1;
}

.highlight{
  color: var(--highlight);
}

body {
  background-color: var(--backgroundColor);
  color: var(--mainFontColor);
  font-family: Heebo, Arial, Helvetica, 'Helvetica Neue', sans-serif;
  padding: 2rem 1.5rem;
}

h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--mainFontColor);
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  letter-spacing: -2px;
  line-height: 1.1em;

  &:after {
    content: '.';
    display: inline-block;
    color: var(--highlight);
  }
}

h2 {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--secondaryFontColor);
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 1.25em;
  letter-spacing: -0.5px;
}

.gatsby-resp-image-wrapper {
  max-width: 800px!important;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}

.btn {
    color: var(--highlight);
    font-weight: 700;
    margin-top: 1.25rem;
    font-size: 1.2rem;
    letter-spacing: -0.5px;
    text-decoration: none;
    text-transform: capitalize;

    &--back{
      &::before{
        content: '<';
        display: inline-block;
        padding-right: 0.4rem;

      }
    }
}
header,
main,
footer {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

header a{
  color: var(--mainFontColor);
  text-decoration: none;
  &:hover{
    color: var(--secondaryFontColor)
  }
}

footer {
  font-weight: 700;
  letter-spacing: -0.5px;
  a {
    color: var(--highlight);
  }
}
`

const layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <header>
        <h1><Link to="/">8-bit</Link></h1>
        <h2>My adventures into <abbr title="Do it Yourself" className="highlight">DIY</abbr> compting&hellip;</h2>
      </header>
      <main>{children}</main>
      <footer>
        &copy; 2019 Huntly Cameron - {" "}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          content on CC 4.0 license
        </a>
        &nbsp;| {" "}
        <a
          href="https://huntlycameron.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Personal Website
        </a>
        &nbsp;| Github:{" "}
        <a
          href="https://github.com/huntlyc"
          target="_blank"
          rel="noopener noreferrer"
        >
          @huntlyc
        </a>
        <br/>Built on top of{" "}
        <a
          href="https://github.com/bagseye/koop-blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          "Koop-Blog"
        </a>
        &nbsp;by{" "}
        <a
          href="https://github.com/bagseye"
          target="_blank"
          rel="noopener noreferrer"
        >
          @bagseye
        </a>{" "}
      </footer>
    </>
  )
}

export default layout
