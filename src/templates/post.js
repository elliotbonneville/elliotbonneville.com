import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import { Layout } from "../components/common";
import { MetaData } from "../components/common/meta";
import MailingListSignup from "../components/common/MailingListSignup";

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
const Post = ({ data, location }) => {
  const post = data.ghostPost;

  return (
    <>
      <MetaData data={data} location={location} type="article" />
      <Helmet>
        <style type="text/css">{`${post.codeinjection_styles}`}</style>
      </Helmet>
      <Layout>
        <article className="">
          {post.feature_image ? (
            <figure className="">
              <img src={post.feature_image} alt={post.title} />
            </figure>
          ) : null}
          <section className="prose prose-lg">
            <div className="text-center">
              <time
                className="text-gray-500 font-normal mb-3 "
                dateTime={post.updated_at}
              >
                {post.updated_at_pretty}
              </time>

              <h1>{post.title}</h1>
              {/* The main post content */}
            </div>
            <section
              className="load-external-scripts"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </section>
          <MailingListSignup />
        </article>
      </Layout>
    </>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
      updated_at_pretty: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

export default Post;

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`;
