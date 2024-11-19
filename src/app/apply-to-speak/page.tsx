import React from 'react';
import Image from 'next/image';
import { Footer } from '@/components/shared';
import styles from './apply.module.scss';

const ApplyToSpeak = () => {
  return (
    <div className={styles.apply}>
      <div className={styles.container}>
        <div className={styles.header}>
          <a href='/'>
            <Image
              src='/images/svg/ffs.svg'
              alt='Funaab Freshmen Summit Logo'
              height={50}
              width={167}
            />
          </a>
        </div>
        <div className={styles.form}>
          <iframe
            src='#'
            width='640'
            height='1790'
            frameBorder='0'
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApplyToSpeak;
