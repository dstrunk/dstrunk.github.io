import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Projects = ({ data }) => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>

    <div className="flex flex-1 w-full flex-wrap -mx-4">
    {data.github.user.repositories.nodes.map((repository, i) => (
      <div className="flex w-1/2">
        <a href={'' + repository.url + ''}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-items-stretch m-4 shadow-md rounded no-underline overflow-hidden content-center justify-center w-1/2"
          key={i}>
          <div className="border-l-4 w-2/3 py-6 px-8 bg-grey-100"
            style={{ borderColor: repository.primaryLanguage.color }}>
            <h2 className="text-grey-700 mb-2">{repository.name}</h2>
            <p className="text-grey-700 text-sm leading-tight">{repository.description}</p>
          </div>
          <div className="w-1/3 text-center border-l border-grey-200 p-8 flex flex-col justify-center bg-grey-100">
            <span className="mb-0 uppercase text-grey-700">Language</span>
            <h3 className="text-grey-700 text-xs font-bold">{repository.primaryLanguage.name}</h3>
          </div>
        </a>
      </div>
    ))}
    </div>
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
