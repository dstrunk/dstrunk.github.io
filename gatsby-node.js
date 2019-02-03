const path = require(`path`)
const slugify = require('limax')

const getType = node => {
  const { fileAbsolutePath } = node
  const [, type] = fileAbsolutePath
    .split(path.resolve('content'))
    .pop()
    .split('/')

  return type
}

const getDate = node => {
  const { fileAbsolutePath } = node
  const [, _type, date] = fileAbsolutePath
    .split(path.resolve('content'))
    .pop()
    .split('/')

  return date
}

const getJekyllDate = node => {
  const { fileAbsolutePath } = node

  try {
    const [, date] = fileAbsolutePath
      .split('/')
      .pop()
      .match(
        /([\d]{4}-[\d]{2}-[\d]{2})/
      )

    return date
  } catch (err) {
    // Swallow the error, this should only happen for old Jekyll posts
  }
}

exports.onCreateNode = ({
  actions: { createNodeField },
  node,
})=> {
  if (node.internal.type === 'MarkdownRemark') {
    const slug = node.frontmatter.slug || slugify(node.frontmatter.title)

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })

    createNodeField({
      node,
      name: 'blogpath',
      value: `${getType(node)}/${getDate(node)}/${slug}`,
    })

    createNodeField({
      node,
      name: 'type',
      value: getType(node),
    })

    createNodeField({
      node,
      name: 'jekyllDate',
      value: getJekyllDate(node),
    })
  }
}

exports.createPages = ({ actions, graphql, getNode }) => {
  const { createPage } = actions

  const postTemplate = path.resolve('src/templates/post.js')

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            excerpt(pruneLength: 160)
            html
            id
            fields {
              slug
              type
              blogpath
              jekyllDate
            }
            frontmatter {
              title
              slug
              date
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      const { fields: { slug, blogpath, type, jekyllDate } } = node

      createPage({
        path: blogpath,
        component: postTemplate,
        context: {
          slug,
          blogpath,
          type,
          jekyllDate,
        },
      })
    })

    return posts
  })
}
