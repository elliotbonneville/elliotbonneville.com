import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Tags } from "@tryghost/helpers-gatsby";

const PostCard = ({ post }) => {
  const url = `/${post.slug}/`;

  return (
    <article className="mt-10">
      <header className="mb-4">
        {post.tags && (
          <div className="">
            <Tags post={post} visibility="public" autolink={false} />
          </div>
        )}
        <Link to={url} className="no-underline">
          <h2 className="mt-2 mb-1 text-3xl font-bold">{post.title}</h2>
        </Link>
        <time
          className="text-gray-500 font-normal mb-3"
          dateTime={post.updated_at}
        >
          {post.updated_at_pretty}
        </time>
      </header>
      <section className="prose prose-lg mb-3">
        {post.excerpt.split(` `).slice(0, 50).join(` `) + `...`}
      </section>
      <Link
        to={url}
        className="no-underline hover:underline font-bold text-gray-500"
      >
        Read more →
      </Link>
    </article>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    feature_image: PropTypes.string,
    featured: PropTypes.bool,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    html: PropTypes.string.isRequired,
    primary_author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile_image: PropTypes.string,
    }).isRequired,
    updated_at: PropTypes.string.isRequired,
    updated_at_pretty: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;
