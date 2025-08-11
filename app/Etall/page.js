import Link from 'next/link';
import Etbuild from '../etbuild/page';
import React from 'react';
import Etwork from '../etwork/page';
import Etrefit from '../etrefit/page';
import styles from './etall.module.css';



export default function Etall() {
  return (
    <div>
        <Etbuild/>
        <Etwork/>
        <Etrefit/>
        <section className={styles.section}>
            <h2>🚶🏼‍♂️</h2>
            <Link href="/" className={styles.ctaButton}>Повернутись на головну</Link>
        </section>
    </div>
  );
}