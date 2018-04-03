import React from 'react'
import Helmet from 'react-helmet'
import Hero from '../components/Hero'

class IndexRoute extends React.Component {
  render () {
    // const { title, subtitle, author, menu } = this.props.data.site.siteMetadata
    return (
      <div>
        <Helmet>
          <title>'OCE'</title>
          <meta name="description" content={'Open Coop Ecosystem'} />
        </Helmet>
        <Hero/>
      </div>
    )
  }
}

export default IndexRoute

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        author {
          email
        }
      }
    }
  }
`
