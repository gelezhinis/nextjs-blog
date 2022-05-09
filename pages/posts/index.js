import React from 'react';
import Head from 'next/head';

import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../helpers/posts-util';

const AllPostsPage = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all progressive music blogs."
        />
      </Head>
      <AllPosts posts={props.posts} />
    </React.Fragment>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
