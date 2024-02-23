
import styles from '../midInfo/midInfo.module.css';
import Spline from '@splinetool/react-spline';

export default function MidInfo() {
    return (
      <div className={styles.containers}>
        <div className={styles.star}>
         <Spline scene="https://prod.spline.design/kSmBnyh2QNkFloGZ/scene.splinecode" />
         </div>
        <div className={styles.contText}>
          <h2>What are zodiacs and horoscopes?</h2>
          Zodiac signs are astrological divisions named after constellations, influencing personality traits. Horoscopes, associated with these signs, offer astrological predictions in areas like relationships and career. To learn more, join our newsletters. 
          <button className= {styles.button}>  Subscribe to Our Newsletters! </button>
        </div>

      </div>
    );
  }
  