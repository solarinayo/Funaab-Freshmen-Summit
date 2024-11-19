'use client';

import { Footer } from '@/components/shared';
import { useRef, useState, useEffect } from 'react';
import {
  BiggestTechFestival,
  Celebration,
  Highlights,
  HomeBanner,
  Subscription,
} from '@/components/home';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const subscriptionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  /*const ScrollToSubscription = () => {
    if (subscriptionRef.current) {
      window.scrollTo({
        top: subscriptionRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  }; */

  if (!isMounted) return <div className='home-banner-paceholder'></div>;

  return (
    <main className='home'>
      <HomeBanner />
      <BiggestTechFestival />
      <Highlights />
      <Celebration />
      <Subscription subscriptionRef={subscriptionRef} />
      <Footer />
    </main>
  );
}
