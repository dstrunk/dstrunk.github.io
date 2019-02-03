import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Projects = ({ data }) => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>

    {data.github.user.repositories.nodes.map((repository, i) => (
      <>
        <h2>
          <a href={'' + repository.url + ''}
            target="_blank"
            rel="noopener noreferrer">
            {repository.name}
            <small class="text-sm uppercase text-grey-500 tracking-wide ml-4">{repository.primaryLanguage.name}</small>
          </a>
        </h2>
        <p>{repository.description}</p>
      </>
    ))}
  </Layout>
)

export default Projects

export const query = graphql`
  query {
    github {
      user(login: "dstrunk") {
        repositories(last: 6, isFork: false, ownerAffiliations: OWNER, privacy: PUBLIC) {
          nodes {
            name
            description
            url
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
`
