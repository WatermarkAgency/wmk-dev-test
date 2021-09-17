import {graphql} from 'gatsby'

export const nodeGlobalFields = graphql`
fragment NodeGlobalFields on ContentfulGlobal {
    title
    phone
    name
    email
    logo {
      file {
        url
        contentType
      }
      title
    }
    links {
      ...NodeLinksFields
    }
}
`