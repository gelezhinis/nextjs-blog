import React from 'react';
import Head from 'next/head';

import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../helpers/posts-util';

const HomePage = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Progressive Rock/Metal Blog</title>
        <meta name="description" content="I post abour progressive music and musicians." />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </React.Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default HomePage;