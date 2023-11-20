import React from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';

const Home: React.FC = () => {
  const styles = {
    main: {
      textAlign: 'center',
      marginTop: '50px',
    },
    title: {
      fontSize: '2em',
    },
  };

  return (
    <div className="container">
      <Head>
        <title>My App</title>
      </Head>
      <Menu />
      <main style={styles.main}>
        <h1 style={styles.title}>Página Inicial</h1>
      </main>
    </div>
  );
};

export default Home;
