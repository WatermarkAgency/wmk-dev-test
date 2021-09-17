import { graphql } from "gatsby";

export const nodeTopicsFields = graphql`
  fragment NodeTopicsFields on ContentfulTopics {
    title
    chapter
    ctaLayout
    sideBySide: mainImage {
      gatsbyImageData(width: 600, height: 600)
      title
    }
    slug
    subhead
    mainImage {
      gatsbyImageData
      title
    }
    squareImage: mainImage {
      gatsbyImageData(width: 600, height: 600)
      title
    }
    longImage: mainImage {
      gatsbyImageData(width: 1200, height: 550)
      title
    }
    modules {
      ... on ContentfulModuleBodyCopy {
        ...ModuleBodyCopyFields
      }
      ... on ContentfulModuleSnapshot {
        ...ModuleSnapshotFields
      }
    }
  }
`;
