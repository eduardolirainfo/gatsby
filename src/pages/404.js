import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Seo from "../components/Seo"
import GlobalStyles from "../styles/global"
import transitions from "../styles/transitions"

const Container = styled.section`
  align-items: center;
  background-image: url("https://eduardolira.dev.br/assets/img/john-404.gif");
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: 800px;
  color: #111;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 0 20px;
  width: 100vw;
  background: linear-gradient(
      183deg,
      rgba(141, 35, 46, 0.5) 1%,
      rgba(141, 35, 46, 0) 60%
    ),
    linear-gradient(
      250deg,
      rgba(141, 35, 46, 0) 21%,
      rgba(141, 35, 46, 0.2) 20%,
      rgba(11, 35, 47, 0.2) 50%
    ),
    linear-gradient(
      250deg,
      rgba(141, 35, 46, 0) 23%,
      rgba(141, 35, 46, 0.2) 20%,
      rgba(11, 35, 47, 0.2) 50%
    ),
    linear-gradient(
      250deg,
      rgba(141, 35, 46, 0) 25%,
      rgba(141, 35, 46, 0.2) 20%,
      rgba(11, 35, 47, 0.2) 50%
    ),
    repeating-linear-gradient(
      179deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1) 3px,
      rgba(0, 0, 0, 0.1) 3px,
      rgba(0, 0, 0, 0.1) 5px
    );

  background-color: #0b232f;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media screen and (max-width: 768px) {
    background-size: 280px;
  }
`

const Title = styled.h1`
  // background: var(--background);
  color: var(--texts);
  font-size: 120px;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: ${transitions.ALL};
  color: var(--cyber);
  text-shadow: 0 0 5px var(--cyberHl);
  &:hover {
    text-shadow: -0.06em 0 #f00, 0.06em 0 var(--cyberHl);
  }
`

const Text = styled.p`
  background: var(--background);
  color: var(--texts);
  font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Helvetica Neue", "Arial", "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`

const Button = styled(Link)`
  letter-spacing: 0.06em;
  line-height: 32px;
  margin-top: 1rem;
  padding: 0 10px;
  font-size: 2em;
  font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Helvetica Neue", "Arial", "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  text-shadow: 0 0 5px #afd33d;
  position: relative;
  color: #afd33d;
  text-decoration: none;
  font-weight: 700;
  border: 2px solid #afd33d;
  text-transform: uppercase;
  padding: 5px 30px;
  box-shadow: inset 0 0 0 0 rgba(175, 211, 61, 0.2);
  -webkit-transition: 25ms ease-in-out all 0ms;
  transition: 25ms ease-in-out all 0ms;
  overflow: hidden;
  -webkit-animation: attn 3s ease-in-out infinite;
  animation: attn 3s ease-in-out infinite;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    -webkit-transform: translate(-50%, 0) scale(1, 1);
    transform: translate(-50%, 0) scale(1, 1);
    -webkit-transform-origin: center;
    transform-origin: center;
    background-color: #11111b;
    width: 90%;
    height: 5px;
    -webkit-transition: 225ms ease-in-out all;
    transition: 225ms ease-in-out all;
    mix-blend-mode: hard-light;
  }
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    -webkit-transform: translate(-50%, 0) scale(1, 1);
    transform: translate(-50%, 0) scale(1, 1);
    -webkit-transform-origin: center;
    transform-origin: center;
    background-color: #11111b;
    width: 90%;
    height: 5px;
    -webkit-transition: 225ms ease-in-out all;
    transition: 225ms ease-in-out all;
    mix-blend-mode: hard-light;
  }
  &:hover {
    cursor: crosshair;
    box-shadow: inset 0 -2em 0 0 rgba(175, 211, 61, 0.2);
    -webkit-transition: 225ms ease-in-out all 225ms;
    transition: 225ms ease-in-out all 225ms;
    -webkit-animation: none;
    animation: none;
    &::before {
      -webkit-transform: translate(-50%, 0) scale(0, 1);
      transform: translate(-50%, 0) scale(0, 1);
    }
    &::after {
      -webkit-transform: translate(-50%, 0) scale(0, 1);
      transform: translate(-50%, 0) scale(0, 1);
    }
  }

  &:active {
    box-shadow: inset 0 -2em 0 0 rgba(175, 211, 61, 0.5);
    -webkit-transition: 225ms ease-in-out all 225ms;
    transition: 225ms ease-in-out all 225ms;
  }

  &::before {
    top: -4px;
  }
  &::after {
    bottom: -4px;
  }

  @-webkit-keyframes attn {
    0%,
    100% {
      opacity: 1;
    }
    30%,
    35% {
      opacity: 0.4;
    }
  }
  @keyframes attn {
    0%,
    100% {
      opacity: 1;
    }
    30%,
    35% {
      opacity: 0.4;
    }
  }
`

const NotFoundPage = () => (
  <Container>
    <Seo title="404: Not found" />
    <GlobalStyles />
    <Title>404</Title>
    <Text>Ué? Cadê? Parece que não tem o que você procura.</Text>
    <Button to="/">De volta ao blog!</Button>
  </Container>
)

export default NotFoundPage
