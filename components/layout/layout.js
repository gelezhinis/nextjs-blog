import React from 'react';

import MainNavigation from './main-navigation';

const Layout = (props) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
