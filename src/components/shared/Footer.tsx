import Image from 'next/image';
import { Button } from './Button';

const currentYear = new Date().getFullYear();

const socials = [
  { link: '#', title: 'twitter' },
  {
    link: '#',
    title: 'facebook',
  },
  { link: 'https://www.instagram.com/freshmensummit?igsh=MWMwZ2oyZ2w5OGZkMA==', title: 'instagram' },
  { link: '#', title: 'linkedin' },
  { link: '#', title: 'youtube' },
];


export const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <div className='container'>
        <div className='footer-main'>
          <div>
            <div className='about-pill text-lg'>
              <p>About the event</p>
            </div>
            <p className='text-base'>
  The FUNAAB Freshmen Summit is an annual gathering designed to welcome and inspire new students at the Federal University of Agriculture, Abeokuta (FUNAAB). It provides a platform for freshmen to gain valuable insights into university life, career development, and technology trends while connecting with fellow students, mentors, and industry leaders.
</p>
<p className='text-base'>
  This year's summit will take place on November 15th and 16th, 2024, at the FUNAAB Multipurpose Hall. The event will feature engaging sessions on personal development, academic excellence, mental health, innovation, and leadership. Be sure to register for sessions that align with your goals and interests to kickstart your journey at FUNAAB with purpose and inspiration.
</p>

            <div className='socials'>
              <p>Follow us on:</p>
              <div>
                {socials.map((social, key) => (
                  <a
                    href={social.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    key={key}
                    aria-label={`Follow us on ${social.title}`}
                  >
                    <Image
                      src={`/images/icons/${social.title}-icon.svg`}
                      alt={`${social.title}`}
                      width={30}
                      height={20}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className='footer-logo'>
              <Image
                src={'/images/svg/ffs2.svg'}
                alt='Funaab Freshmen Summit Logo'
                width={100}
                height={54}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <a href={'/apply-to-speak/'}>
              <Button label='Apply To Speak' size='lg' animate={false} />
            </a>

           
          </div>
        </div>
        <p className='footer-copyright'>© {currentYear} Funaab Freshmen Summit. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
