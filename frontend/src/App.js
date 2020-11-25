import React from 'react';
import Category from './components/Category';
import Header from './components/Header';
import Layout from './components/Layout';
import MainBanner from './components/MainBanner';

const App = () => {
  return (
    <>
      <Header />
      <Category />
      <Layout>
        <MainBanner />
      </Layout>
    </>
  );
};

export default App;