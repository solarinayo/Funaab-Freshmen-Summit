'use client';
import { sendGAEvent } from '@next/third-parties/google';

const TestPage = () => {
  return (
    <>
      <button onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'xyz' })}>
        This button sends a GA event
      </button>
    </>
  );
};

export default TestPage;
