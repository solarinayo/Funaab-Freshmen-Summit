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
  '1.webp',
  '2.webp',
  '3.webp',
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
              Learn and Connect at Funaab Freshmen Summit &apos;25 ✨
            </h2>
          </div>
          <p className='text-xl' ref={biggestTechSubTextRef}>
          Create lasting memories 😊 as you embark on an exciting journey designed for freshmen, filled with unique experiences, inspiring sessions, and opportunities to connect with peers, mentors, and innovators.
          </p>
        </div>
      </div>

      
      <div
        className='image-gallery'
        aria-label='Scrolling images of past events'
        ref={imageGalleryContainerRef}
      >

<div className='asterisk-container'>
            <Image src='/images/svg/green_arrow.svg' alt='Asterisk' height={40} width={40} />
          </div>
<Marquee speed={20} aria-label='Scrolling images of past events'>
          {eventImages.map((image, key) => (
            <div className='single-img-container' key={key}>
              <Image
                src={`/images/webp/${image}`}
                alt={'Festival Image'}
                height={300}
                width={320}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px', // Adds border radius to the image
                }}
                // layout='responsive'
              />
            </div>
          ))}
        </Marquee>
  

      </div>


      
    </section>
  );
};
