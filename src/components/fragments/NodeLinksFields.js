import { graphql } from "gatsby";

export const nodeLinksFields = graphql`
  fragment NodeLinksFields on ContentfulLinks {
    url
    type
    title
    target
    displayTitle
    subtext {
      subtext
    }
    linkAppearance
    asset {
      title
      file {
        url
        contentType
      }
    }
    entry {
      ... on ContentfulChapters {
        slug
        title
        squareImage: mainImage {
          gatsbyImageData(width: 400, height: 400)
          title
        }
        wideImage: mainImage {
          gatsbyImageData
        }
      }
      ... on ContentfulPages {
        slug
        title
        squareImage: mainImage {
          gatsbyImageData(width: 400, height: 400)
          title
        }
      }
    }
    coverImage: assetImage {
      title
      gatsbyImageData(width: 360, height: 230)
    }
  }
`;
