import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h2>Hello</h2>
    <p>
      Thanks for your interest in becoming a developer on the Watermark team!
    </p>
    <p>
      One of the main things we do is build static sites using the Gatsby React
      framework. Below are links to a few code challenges that will show us your
      ability to work in a typical React environment you would find on the job.
    </p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/challenge1">1. Structuring API Data</Link> <br />
      <Link to="/challenge2">2. Using Data in a single Component</Link> <br />
      <Link to="/challenge3">3. Render Multiple Components</Link>
    </p>
  </Layout>
);

export default IndexPage;
