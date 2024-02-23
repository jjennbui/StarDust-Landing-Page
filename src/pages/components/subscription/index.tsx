
import Image from 'next/image';
import styles from '../subscription/subscription.module.css';
import Spline from '@splinetool/react-spline';


export default function Subscription() {
    return (
        <div className={styles.container}>

            <h2 style={{ textAlign: 'center' }}>Plans & Pricing</h2>

            <div className={styles.plans}>
                
                <div className={styles.card}>
                    <div className={styles.info}>
                    <Spline scene="https://prod.spline.design/zJOXxmGi-wffx2wV/scene.splinecode"/>
                        <p className={styles.title}>Basic</p>
                        <p className={styles.desc}>⭒ Free ⭒</p>
                        <p >Beginner Plan</p>
                
                    </div>
                    <div style={{marginLeft:'70px'}}>
                        <li>Daily horoscopes</li>
                    <li>Limited zodiac insights</li>
                    <li> Ad-supported</li>
                  
                    </div>
                    <button className={styles.button}>Start Free</button>
                </div>

                <div className={styles.card}>
                    <div className={styles.info}>
                    <Spline scene="https://prod.spline.design/zJOXxmGi-wffx2wV/scene.splinecode"/>
                        <p className={styles.title}>Pro</p>
                        <p className={styles.desc}>⭒ $15 ⭒</p>
                        <p >Most popular Plan</p>
                    </div>
                    <div style={{marginLeft:'70px'}}>
                    <li>Daily horoscopes</li>
                    <li>Personalized insights</li>
                    <li> Ad-free experience</li>                  
                    </div>
                    <button className={styles.button}>Start Pro</button>
                </div>

                <div className={styles.card}>
                    <div className={styles.info}>
                    <Spline scene="https://prod.spline.design/zJOXxmGi-wffx2wV/scene.splinecode"/>
                        <p className={styles.title}>Premium</p>
                        <p className={styles.desc}>⭒ $25 ⭒</p>
                        <p >Astrology Enthusiasts Plan </p>
                    </div>
                    <div style={{marginLeft:'70px'}}>
                    <li>Features from Basic Plan</li>
                    <li>Astrology compatibility </li>
                    <li> Access to new features</li>                  
                    </div>
                    <button className={styles.button}>Start Premium</button>
                </div>

            </div>






        </div>
    );
}
