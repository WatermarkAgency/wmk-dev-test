import { graphql } from "gatsby";

export const moduleSnapshotFields = graphql`
  fragment ModuleSnapshotFields on ContentfulModuleSnapshot {
    snapImage: image {
      gatsbyImageData
      title
    }
    title
  }
`;
