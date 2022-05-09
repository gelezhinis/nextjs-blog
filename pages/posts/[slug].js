import React from 'react';
import Head from 'next/head';

import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../helpers/posts-util";

const SinglePostPage = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </React.Fragment>
  );
};

export function getStaticProps(context) {
  const slug = context.params.slug;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData
    },
    revalidate: 600
  }
}

export function getStaticPaths() {
  const postsFilenames = getPostsFiles();
  const slugs = postsFilenames.map(filename => filename.replace(/\.md$/, ''));
  const slugsArray = slugs.map(slug => ({params: {slug: slug}}));

  return {
    paths: slugsArray,
    fallback: false
  }
}

export default SinglePostPage;
