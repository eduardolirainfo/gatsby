import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import SocialLinks from "../components/SocialLinks"
import { MainContent } from "../components/Post/styled"

const AboutPage = () => (
  <Layout>
    <Seo
      title="Sobre mim"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
    />
    <MainContent>
      <h2>Sobre mim</h2>
      <p>
        Meu nome é Eduardo Lira, nasci no Rio de janeiro/RJ e atualmente sou
        desenvolvedor na{" "}
        <a
          href="https://www.sofis.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sofis Tecnologia
        </a>
      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </Layout>
)

export default AboutPage
