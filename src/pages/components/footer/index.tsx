

import Link from 'next/link';
import styles from '../footer/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      
      <div>
      ©Jenny Bui 2024
      </div>
      <Link href={'https://github.com/raxron/StarDust.git'}>StarDust GitHub</Link>
    </footer>
  );
}
