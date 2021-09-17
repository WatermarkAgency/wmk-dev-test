import { graphql } from "gatsby";

export const moduleBodyCopyFields = graphql`
  fragment ModuleBodyCopyFields on ContentfulModuleBodyCopy {
    title
    hideTitle
    showAsAccordion
  }
`;
