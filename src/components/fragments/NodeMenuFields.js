import { graphql } from "gatsby";

export const nodeMenuContainerFields = graphql`
  fragment NodeMenuFields on ContentfulMenus {
    title
    menuItems {
      ... on ContentfulLinks {
        ...NodeLinksFields
      }
      ... on ContentfulMenus {
        id
        title
        menus {
          menuItems {
            ... on ContentfulLinks {
                ...NodeLinksFields
            }
          }
        }
      }
    }
  }
`;
