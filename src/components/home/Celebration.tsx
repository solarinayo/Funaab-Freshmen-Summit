import { Button } from '../shared';
import SplitType from 'split-type';
import { useRef, useEffect } from 'react';
import {
  topicPillAnimation,
  celebrationHeaderTextAnimation,
  celebrationSubTextAnimation,
} from '@/utils/animations/pages/homeAnimations';

const TopicPill = ({ topic }: { topic: { title: string; bg: string } }) => {
  const topicPillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    topicPillAnimation(topicPillRef);
  }, []);
  return (
    <div
      className='topic-pill'
      style={{ backgroundColor: topic.bg }}
      role='region'
      ref={topicPillRef}
      aria-label={`Topic: ${topic.title}`}
    >
      <p>{topic.title}</p>
    </div>
  );
};

const topics = [
  {
    title: 'Funaab ☀️',
    bg: '#FFFAEB',
  },
  {
    title: 'FPY 🚜',
    bg: '#F8D8D8',
  },
  {
    title: 'JAO3 🏪',
    bg: '#D3F1F8',
  },
  {
    title: 'SUB 👨🏿‍⚖️',
    bg: '#CCF6C5',
  },
  {
    title: '  Motion Ground 👨🏿‍⚖️',
    bg: '#F8D8D8',
  },
  {
    title: 'Mancot 🌐',
    bg: '#D3F1F8',
  },
  {
    title: '1K WHAT? 1000 CAP',
    bg: '#FFFAEB',
  },
  {
    title: '⁠Goody Media 📷',
    bg: '#CCF6C5',
  },
  {
    title: 'Do not cross lawn 🎓',
    bg: '#72c876',
  },
  {
    title: '⁠Oluwo 🚀',
    bg: '#D3F1F8',
  },

  {
    title: '⁠⁠Iyat 🫂',
    bg: '#CCF6C5',
  },
];

export const Celebration = () => {
  const headerTextRef = useRef<HTMLDivElement>(null);
  const subTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headerText = SplitType.create('#celebrationHeading');
    celebrationHeaderTextAnimation(headerText, headerTextRef);
    celebrationSubTextAnimation(subTextRef);

    return () => {
      headerText.revert();
    };
  }, []);

  return (
    <section className='celebration-wrapper' aria-labelledby='celebration-heading'>
      <div className='container celebration-content'>
        <div className='overflow-hidden'>
          <h2 id='celebrationHeading' className='text-5xl text-center' ref={headerTextRef}>
         I go lie for you?! 😎🎉
          </h2>
        </div>

        <p className='text-xl' ref={subTextRef}>
        The 3rd edition of Funaab Freshmen Summit dey happen! 🔥, No dulling, join us for the ultimate summit! in Sun city🌞
        </p>
        <a href={'https://chat.whatsapp.com/Kjmsk4RH3Jt1ySdSLsA9NP'}>
          <Button label='Subscribe to Waitlist' size='lg' />
        </a>
      </div>
      <div className='container topics-wrapper'>
        {topics.map((topic, index) => (
          <TopicPill topic={topic} key={index} />
        ))}
      </div>
    </section>
  );
};
