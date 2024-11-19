import gsap from 'gsap';
import { RefObject } from 'react';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { componentSize } from '@/components/shared/types';

gsap.registerPlugin(ScrollTrigger);

const buttonAnimation = (buttonRef: RefObject<HTMLButtonElement>, size?: componentSize) => {
  const button = buttonRef.current;

  if (button) {
    const buttonLabel = SplitType.create(button?.getElementsByTagName('div'));

    const btnHorizontalPadding = size === 'sm' ? 54 : size === 'md' ? 65 : 54;
    const btnVerticalPadding = size === 'sm' ? 12 : size === 'md' ? 20 : 23;

    gsap.fromTo(
      button,
      {
        padding: `${btnVerticalPadding} ${btnHorizontalPadding / 1.5}`,
      },
      {
        padding: `${btnVerticalPadding} ${btnHorizontalPadding}`,
        duration: 1,
        ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
        scrollTrigger: {
          trigger: button,
        },
      },
    );

    gsap.fromTo(
      buttonLabel.words,
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.04,
        ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
        duration: 0.5,
        delay: 0.4,
        scrollTrigger: {
          trigger: button,
        },
      },
    );
  }
};

export default buttonAnimation;
