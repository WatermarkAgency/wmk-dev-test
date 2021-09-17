import { graphql } from "gatsby";

export const nodePagesFields = graphql`
  fragment NodePagesFields on ContentfulPages {
    title
    slug
    mainImage {
      gatsbyImageData
      title
    }
    links {
      ...NodeLinksFields
    }
    blocks {
      ... on ContentfulMenus {
        ...NodeMenuFields
      }
      ... on ContentfulModuleBodyCopy {
        ...ModuleBodyCopyFields
      }
    }
  }
`;
