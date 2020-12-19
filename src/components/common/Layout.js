import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";

import config from "../../utils/siteConfig";

import "../../styles/app.css";

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({ data, children, bodyClass }) => {
  const site = data.allGhostSettings.edges[0].node;
  const twitterUrl = site.twitter
    ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}`
    : null;

  return (
    <>
      <Helmet>
        <html lang={site.lang} />
        <style type="text/css">{`${site.codeinjection_styles}`}</style>
        <body className={bodyClass} />
      </Helmet>

      <div className="container mx-auto px-4 max-w-2xl">
        {/* The main header section on top of the screen */}
        <header className="flex justify-between w-full mt-5 mb-5">
          <div className="flex">
            <div className="font-bold text-gray-500 text-lg">
              <Link to="/">{site.title}</Link>
            </div>
          </div>
          <nav className="flex items-center">
            <a
              className="text-gray-500 flex items-center"
              href={`https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-5" src="/images/icons/rss.svg" alt="RSS Feed" />
            </a>
            {site.twitter && (
              <a
                href={twitterUrl}
                className="h-5 text-gray-500 ml-1 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/icons/twitter.svg" alt="Twitter" />
              </a>
            )}
            <Link className="font-bold text-gray-500 text-lg ml-1" to="/about">
              About
            </Link>
          </nav>
        </header>

        <main className="">
          {/* All the main content gets inserted here, index.js, post.js */}
          {children}
        </main>
      </div>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  bodyClass: PropTypes.string,
  isHome: PropTypes.bool,
  data: PropTypes.shape({
    file: PropTypes.object,
    allGhostSettings: PropTypes.object.isRequired,
  }).isRequired,
};

const DefaultLayoutSettingsQuery = props => (
  <StaticQuery
    query={graphql`
      query GhostSettings {
        allGhostSettings {
          edges {
            node {
              ...GhostSettingsFields
            }
          }
        }
        file(relativePath: { eq: "ghost-icon.png" }) {
          childImageSharp {
            fixed(width: 30, height: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <DefaultLayout data={data} {...props} />}
  />
);

export default DefaultLayoutSettingsQuery;
