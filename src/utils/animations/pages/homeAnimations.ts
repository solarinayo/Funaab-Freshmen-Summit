import gsap from 'gsap';
import { RefObject } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

//Banner animations
export const logoAnimation = (logoRef: RefObject<HTMLDivElement>) => {
  if (logoRef.current) {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
        scrollTrigger: {
          trigger: logoRef.current,
        },
      },
    );
  }
};

export const headerTextAnimation = (
  bannerHeaderText: { lines: HTMLElement[] | null },
  bannerHeaderTextRef: RefObject<HTMLDivElement>,
  useScrollTrigger = false,
) => {
  if (bannerHeaderText && bannerHeaderText.lines) {
    gsap.fromTo(
      bannerHeaderText.lines,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.4,
        delay: 0.4,
        duration: 1,
        ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
        scrollTrigger: useScrollTrigger
          ? {
              trigger: bannerHeaderTextRef.current,
              toggleActions: 'play none none none',
              start: '40px 60%',
            }
          : undefined,
      },
    );
  }
};

export const headerSubTextAnimation = (
  bannerSubTextRef: RefObject<HTMLDivElement>,
  useScrollTrigger = false,
) => {
  if (bannerSubTextRef.current) {
    gsap.fromTo(
      bannerSubTextRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
        delay: 0.5,
        scrollTrigger: useScrollTrigger
          ? {
              trigger: bannerSubTextRef.current,
              toggleActions: 'play none none none',
              start: '40px 60%',
            }
          : undefined,
      },
    );
  }
};

//Bigest Tech Festival Animations

export const biggestTechHeaderAnimation = (
  biggestTechHeaderText: { lines: HTMLElement[] | null },
  biggestTechHeaderRef: RefObject<HTMLDivElement>,
) => {
  if (biggestTechHeaderText) {
    gsap.fromTo(
      biggestTechHeaderText.lines,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
        delay: 0.2,
        scrollTrigger: {
          trigger: biggestTechHeaderRef.current,
          start: '40px 85%',
        },
      },
    );
  }
};

export const biggestTechSubTextAnimation = (biggestTechSubTextRef: RefObject<HTMLDivElement>) => {
  if (biggestTechSubTextRef.current) {
    gsap.fromTo(
      biggestTechSubTextRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
        delay: 0.2,
        scrollTrigger: {
          trigger: biggestTechSubTextRef.current,
          start: '40px 85%',
        },
      },
    );
  }
};

export const imageGalleryAnimation = (imageGalleryRef: RefObject<HTMLDivElement>) => {
  setTimeout(() => {
    if (imageGalleryRef.current && window.innerWidth > 1280) {
      gsap.fromTo(
        imageGalleryRef.current,
        { opacity: 0, x: 400 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.2,
          ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
          scrollTrigger: {
            trigger: imageGalleryRef.current,
            start: '40px 85%',
          },
        },
      );
      const items = imageGalleryRef.current.querySelectorAll('.single-img-container img');
      Array.from(items).forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, scale: 1.1 },
          {
            opacity: 1,
            duration: 1,
            delay: 0.4,
            scale: 1,
            ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
            scrollTrigger: {
              trigger: imageGalleryRef.current,
              start: '40px 85%',
            },
          },
        );
      });
    }
  }, 100);
};

//HiGHLIGHTS SECTION

export const highlightsIntroHeader = (highlightsIntroHeaderRef: RefObject<HTMLHeadingElement>) => {
  if (highlightsIntroHeaderRef.current) {
    gsap.fromTo(
      highlightsIntroHeaderRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
        scrollTrigger: {
          trigger: highlightsIntroHeaderRef.current,
          start: '40px 85%',
        },
      },
    );
  }
};

export const highlightsHeaderAnimation = (
  highlightsHeaderText: { lines: HTMLElement[] | null },
  highlightHeaderRef: RefObject<HTMLElement>,
) => {
  if (highlightsHeaderText) {
    gsap.fromTo(
      highlightsHeaderText.lines,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        duration: 1,
        ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
        delay: 0.3,
        scrollTrigger: {
          trigger: highlightHeaderRef.current,
          start: '40px 85%',
        },
      },
    );
  }
};

export const highlightsVideoBgAnimation = (highlightsVideoBgRef: RefObject<HTMLDivElement>) => {
  gsap.fromTo(
    highlightsVideoBgRef.current,
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      duration: 0.7,
      delay: 0.5,
      scale: 1,
      ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
      scrollTrigger: {
        trigger: highlightsVideoBgRef.current,
        start: '40px 85%',
      },
    },
  );
};

//CELEBRATION ANIMATION

//In case of edits for individual items
export const celebrationHeaderTextAnimation = (
  headerText: { lines: HTMLElement[] | null },
  headerTextRef: RefObject<HTMLDivElement>,
) => headerTextAnimation(headerText, headerTextRef, true);

export const celebrationSubTextAnimation = (subTextRef: RefObject<HTMLDivElement>) =>
  headerSubTextAnimation(subTextRef, true);

//SUBSCRIPTION SECTION ANIMATION

export const subscriptionFormContainerAnimation = (
  subscriptionFormContainerRef: RefObject<HTMLDivElement>,
) => {
  if (subscriptionFormContainerRef.current) {
    gsap.fromTo(
      subscriptionFormContainerRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        delay: 0.5,
        duration: 1,
        ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
        scrollTrigger: {
          trigger: subscriptionFormContainerRef.current,
          start: '40px 85%',
        },
      },
    );
  }
};

export const topicPillAnimation = (topicPillRef: RefObject<HTMLDivElement>) => {
  if (topicPillRef.current) {
    gsap.fromTo(
      topicPillRef.current,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        delay: 0.4,
        duration: 1,
        ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
        scrollTrigger: {
          trigger: topicPillRef.current,
        },
      },
    );
  }
};

export const subscriptionHeadingTextAnimation = (
  subscriptionHeadingTextRef: RefObject<HTMLDivElement>,
) => {
  if (subscriptionHeadingTextRef.current) {
    gsap.fromTo(
      subscriptionHeadingTextRef.current,
      { y: -32, opacity: 0 },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
        duration: 1,
        ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
        scrollTrigger: {
          trigger: subscriptionHeadingTextRef.current,
          start: '40px 85%',
        },
      },
    );
  }
};

export const eventGalleryContainerAnimation = (eventGalleryRef: RefObject<HTMLDivElement>) => {
  if (eventGalleryRef.current) {
    const eventGalleryContainer = eventGalleryRef.current.querySelectorAll('div');

    eventGalleryContainer.forEach((item, index) => {
      const rotateFrom = index % 2 !== 0 ? 10 : -340;
      const rotateTo = index % 2 !== 0 ? -10 : -350;

      gsap.fromTo(
        item,
        { opacity: 0, scale: 0.8, rotation: rotateFrom },
        {
          opacity: 1,
          duration: 1,
          rotation: rotateTo,
          scale: 1,
          ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
          scrollTrigger: {
            trigger: eventGalleryRef.current,
            start: '40px 20%',
          },
        },
      );
    });
  }
};
