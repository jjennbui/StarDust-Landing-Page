
import Image from 'next/image';
import styles from '../topInfo/topinfo.module.css';
import Spline from '@splinetool/react-spline';

export default function TopInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.contText}>
        <h1 className={styles.title}>STARDUST</h1>
        Find your zodiac and get your horoscope.
        <button className={styles.button}>Download Now</button>
      </div>

      <div className={styles.spline}>
        < Spline scene="https://prod.spline.design/v-tOHxvijTwDxzoI/scene.splinecode" />
      </div>
    </div>
  );
}
