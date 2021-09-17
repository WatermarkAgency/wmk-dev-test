import { graphql } from "gatsby";

export const nodeChaptersFields = graphql`
  fragment NodeChaptersFields on ContentfulChapters {
    slug
    title
    topics {
      ...NodeTopicsFields
    }
    mainImage {
      gatsbyImageData
      title
    }
    links {
      ...NodeLinksFields
    }
    pdf {
      file {
        url
      }
    }
  }
`;
