import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import SocialLinks from "../components/SocialLinks"

import { MainContent } from "../styles/base"

const AboutPage = () => (
  <Layout>
    <Seo
      title="Sobre mim"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
    />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Meu nome é Eduardo Lira, nasci no Rio de janeiro/RJ e atualmente sou
        desenvolvedor na{" "}
        <a
          href="http://studiovs.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Studio VS
        </a>
      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </Layout>
)

export default AboutPage
