import Link from 'next/link';

export const Menu: React.FC = () => {
    const styles = {
        nav: {
          display: 'flex',
          backgroundColor: 'black',
          height: '50px',
          margin: '0',
          alingItems: 'center',
        },
        link: {
          color: 'white',
          textDecoration: 'none',
          marginRight: '3%',
          cursor: 'pointer',
        },
      };

  return (
    <nav style={styles.nav}>
        <Link style={styles.link} href="/">Home</Link>
        <Link style={styles.link} href="/LivroLista">Catálago</Link>
        <Link style={styles.link} href="/LivroDados">Novo</Link>
    </nav>
  );
};

export default Menu;