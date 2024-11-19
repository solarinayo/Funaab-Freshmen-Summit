'use client';

import { gsap } from 'gsap';
import React, { useState, useEffect, useMemo, useRef, RefObject } from 'react';

const isValidDateFormat = (dateString: string): boolean => {
  const regex = /^\d{1,2}\/\d{1,2}\/\d{4} \d{2}:\d{2}:\d{2}$/; // Updated to allow single-digit day/month
  return regex.test(dateString);
};

const parseDateString = (dateString: string): Date => {
  if (!isValidDateFormat(dateString)) {
    console.error(
      'Invalid date format. Please use "DD/MM/YYYY HH:MM:SS". Example: 29/10/2024 00:35:00',
    );
    return new Date('Invalid Date');
  }

  const [datePart, timePart] = dateString.split(' ');
  const [day, month, year] = datePart.split('/');
  const [hours, minutes, seconds] = timePart.split(':');

  return new Date(
    parseInt(year, 10),
    parseInt(month, 10) - 1, // Months are 0-indexed in JavaScript
    parseInt(day, 10),
    parseInt(hours, 10),
    parseInt(minutes, 10),
    parseInt(seconds, 10),
  );
};

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (eventDate: Date): TimeLeft => {
  const difference = +eventDate - +new Date();
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  return timeLeft;
};

export const CountdownTimer = () => {
  const eventDateStr = process.env.NEXT_PUBLIC_EVENT_TIME || '';
  const eventDate = useMemo(() => parseDateString(eventDateStr), [eventDateStr]);

  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(eventDate));

  const containerRef = useRef<HTMLDivElement>(null);

  const activeSecondsRef = useRef<HTMLHeadingElement>(null);
  const hiddenSecondsRef = useRef<HTMLHeadingElement>(null);

  const activeMinuteRef = useRef<HTMLHeadingElement>(null);
  const hiddenMinuteRef = useRef<HTMLHeadingElement>(null);

  const activeHoursRef = useRef<HTMLHeadingElement>(null);
  const hiddenHoursRef = useRef<HTMLHeadingElement>(null);

  const activeDaysRef = useRef<HTMLHeadingElement>(null);
  const hiddenDaysRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(eventDate));

      if (eventDate.getTime() - new Date().getTime() <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const moveTimeElement = async ({
    activeElRef,
    hiddenElRef,
  }: {
    activeElRef: RefObject<HTMLElement>;
    hiddenElRef: RefObject<HTMLElement>;
  }) => {
    const tl1 = gsap.timeline();
    const tl2 = gsap.timeline();

    const activeEl = activeElRef.current;
    const hiddenEl = hiddenElRef.current;

    if (activeEl && hiddenEl) {
      tl1.to(activeEl, { y: '100%' }); // Move visible element to the bottom
      tl2.to(hiddenEl, { y: '0%' });  // Move hidden element to main view

      hiddenEl.innerText = activeEl.innerText; // Swap content
      tl1.set(activeEl, { y: '0%' }); // Reset values
      tl2.set(hiddenEl, { y: '-100%' });
    }
  };

  useEffect(() => {
    moveTimeElement({ activeElRef: activeSecondsRef, hiddenElRef: hiddenSecondsRef });
  }, [timeLeft.seconds]);

  useEffect(() => {
    moveTimeElement({ activeElRef: activeMinuteRef, hiddenElRef: hiddenMinuteRef });
  }, [timeLeft.minutes]);

  useEffect(() => {
    moveTimeElement({ activeElRef: activeHoursRef, hiddenElRef: hiddenHoursRef });
  }, [timeLeft.hours]);

  useEffect(() => {
    moveTimeElement({ activeElRef: activeDaysRef, hiddenElRef: hiddenDaysRef });
  }, [timeLeft.days]);

  if (!isMounted) return <div className='timer-placeholder'></div>;

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className='countdown-wrapper' ref={containerRef}>
      <div className='time-element-container'>
        <div className='time-element'>
          <h1 ref={activeDaysRef} className='visible-el text-6xl'>
            {days}
          </h1>
          <h1 ref={hiddenDaysRef} className='hidden-el text-6xl'></h1>
        </div>
        <p>Days</p>
      </div>
      <div className='time-element-container'>
        <div className='time-element'>
          <h1 ref={activeHoursRef} className='visible-el text-6xl'>
            {hours}
          </h1>
          <h1 ref={hiddenHoursRef} className='hidden-el text-6xl'></h1>
        </div>
        <p>Hours</p>
      </div>
      <div className='time-element-container'>
        <div className='time-element'>
          <h1 ref={activeMinuteRef} className='visible-el text-6xl'>
            {minutes}
          </h1>
          <h1 ref={hiddenMinuteRef} className='hidden-el text-6xl'></h1>
        </div>
        <p>Minutes</p>
      </div>
      <div className='time-element-container'>
        <div className='time-element'>
          <h1 ref={activeSecondsRef} className='visible-el text-6xl'>
            {seconds}
          </h1>
          <h1 ref={hiddenSecondsRef} className='hidden-el text-6xl'></h1>
        </div>
        <p>Seconds</p>
      </div>
    </div>
  );
};
