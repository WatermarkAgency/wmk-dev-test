import { graphql } from "gatsby";
import * as React from "react";

const BlogLink = ({ slug, title }) => {
  return <a href={`/${slug}`}>{title}</a>;
};

const BlogNode = ({ data }) => {
  const blogs = [];
  return (
    <ul>
      {blogs.map((blog, i) => {
        return (
          <li key={blog.slug + i}>
            <BlogLink slug={blog.slug} title={blog.title} />
          </li>
        );
      })}
    </ul>
  );
};

export default BlogNode;

export const query = graphql`
  {
    blogs: allContentfulWmkBlogs {
      edges {
        node {
          title
          slug
          tags
        }
      }
    }
  }
`;
