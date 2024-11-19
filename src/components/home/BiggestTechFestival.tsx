import Image from 'next/image';
import SplitType from 'split-type';
import Marquee from 'react-fast-marquee';
import { useEffect, useRef } from 'react';
import {
  biggestTechHeaderAnimation,
  biggestTechSubTextAnimation,
  imageGalleryAnimation,
} from '@/utils/animations/pages/homeAnimations';

const eventImages = [
  'tech-festival-img-one.webp',
  'tech-festival-img-two.webp',
  'tech-festival-img-three.webp',
  'tech-festival-img-four.webp',
];

export const BiggestTechFestival = () => {
  const biggestTechHeaderRef = useRef<HTMLDivElement>(null);
  const biggestTechSubTextRef = useRef<HTMLDivElement>(null);
  const imageGalleryContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const biggestTechHeader = SplitType.create('#biggestTechHeader');
    biggestTechHeaderAnimation(biggestTechHeader, biggestTechHeaderRef);
    biggestTechSubTextAnimation(biggestTechSubTextRef);
    imageGalleryAnimation(imageGalleryContainerRef);

    return () => {
      biggestTechHeader.revert();
    };
  }, []);

  return (
    <section className='big-tech-festival-wrapper' aria-labelledby='festival-heading'>
      <div className='container'>
        <div className='text-content'>
          <div className='overflow-hidden'>
            <h2 id='biggestTechHeader' className='text-5xl' ref={biggestTechHeaderRef}>
              Learn and Connect at DevFest Lagos &apos;24
            </h2>
          </div>
          <p className='text-xl' ref={biggestTechSubTextRef}>
            Create memories by enjoying an unparalleled experience for developers, tech enthusiasts,
            and innovators.
          </p>
        </div>
      </div>
      <div
        className='image-gallery'
        aria-label='Scrolling images of past events'
        ref={imageGalleryContainerRef}
      >
        <Marquee speed={20} aria-label='Scrolling images of past events'>
          {eventImages.map((image, key) => (
            <div className='single-img-container' key={key}>
              <Image
                src={`/images/webp/${image}`}
                alt={'Festival Image'}
                height={300}
                width={320}
                style={{ width: '100%', height: '100%' }}
                // layout='responsive'
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
