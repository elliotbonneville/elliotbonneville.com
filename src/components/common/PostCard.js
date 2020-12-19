import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Tags } from "@tryghost/helpers-gatsby";
import { readingTime as readingTimeHelper } from "@tryghost/helpers";

const PostCard = ({ post }) => {
  const url = `/${post.slug}/`;
  const readingTime = readingTimeHelper(post);

  return (
    <Link to={url} className="">
      <header className="">
        {post.feature_image && (
          <div
            className=""
            style={{
              backgroundImage: `url(${post.feature_image})`,
            }}
          ></div>
        )}
        {post.tags && (
          <div className="">
            {` `}
            <Tags post={post} visibility="public" autolink={false} />
          </div>
        )}
        {post.featured && <span>Featured</span>}
        <h2 className="">{post.title}</h2>
      </header>
      <section className="">{post.excerpt}</section>
      <footer className="">
        <div className=""></div>
        <div className="">
          <div>{readingTime}</div>
        </div>
      </footer>
    </Link>
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
    excerpt: PropTypes.string.isRequired,
    primary_author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default PostCard;
