'use client';

import Image from 'next/image';
import { Button, Textfield, Modal } from '../shared';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNotifyMeApi } from '@/lib/actions/subscription';
import { useState, useEffect, LegacyRef, useRef } from 'react';
import { subscriptionFormData } from '@/lib/actions/subscription/models';
import { subscriptionFormValidationSchema } from '@/utils/validationSchemas/subscriptionFormSchema';
import {
  subscriptionFormContainerAnimation,
  subscriptionHeadingTextAnimation,
  eventGalleryContainerAnimation,
} from '@/utils/animations/pages/homeAnimations';

export const Subscription = ({ subscriptionRef }: { subscriptionRef: LegacyRef<HTMLElement> }) => {
  const subsciptionFormRef = useRef<HTMLDivElement>(null);
  const textHeadingRef = useRef<HTMLDivElement>(null);
  const eventGgallerycontainerRef = useRef<HTMLDivElement>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [formErr, setFormErr] = useState<string | null>(null);

  useEffect(() => {
    subscriptionFormContainerAnimation(subsciptionFormRef);
    subscriptionHeadingTextAnimation(textHeadingRef);
    eventGalleryContainerAnimation(eventGgallerycontainerRef);
  }, []);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<subscriptionFormData>({
    mode: 'onBlur',
    //@ts-ignore
    resolver: yupResolver(subscriptionFormValidationSchema),
  });

  const handleSubscriptionSuccess = () => {
    setIsSuccessModalOpen(true);
    reset();
  };

  const handleSubscriptionError = (err: string) => {
    if (typeof err === 'string') {
      setFormErr(err);
      setTimeout(() => {
        setFormErr(null);
      }, 5000);
    }
  };

  const { notifyMe, isLoading } = useNotifyMeApi({
    onSuccess: handleSubscriptionSuccess,
    onError: handleSubscriptionError,
  });

  const onSubmit: SubmitHandler<subscriptionFormData> = (payload) => notifyMe(payload);

  return (
    <>
      <section className='subscription-wrapper' ref={subscriptionRef}>
        <div className='container'>
          <div className='subscription-content'>
            <div className='subscription-form-container'>
              <p className='text-xl intro-text'>Join the community</p>
              <div className='overflow-hidden'>
                <h2 className='text-5xl' ref={textHeadingRef}>
                  Don&apos;t loose guard. Get notified first!
                </h2>
              </div>

              <div ref={subsciptionFormRef}>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <Textfield
                    id='name'
                    placeholder='Your Name'
                    register={register}
                    error={errors.name?.message}
                  />

                  <Textfield
                    id='email'
                    type='email'
                    placeholder='Email Address'
                    register={register}
                    error={errors.email?.message}
                  />
                  <p className='text-sm text-error'>{formErr}</p>
                  <Button type='submit' label='Submit' isLoading={isLoading}></Button>
                </form>
              </div>
            </div>
            <div className='event-gallery-container' ref={eventGgallerycontainerRef}>
              <div className='event-img-four'>
                <Image
                  src='/images/webp/2023-event-img-four.webp'
                  width='280'
                  height='300'
                  alt='Event Image - Woman giving speech'
                />
              </div>
              <div className='event-img-three'>
                <Image
                  src='/images/webp/2023-event-img-three.webp'
                  width='280'
                  height='300'
                  alt='Event Image - Man addressing question'
                />
              </div>
              <div className='event-img-two'>
                <Image
                  src='/images/webp/2023-event-img-two.webp'
                  width='280'
                  height='300'
                  alt='Event Image - Man asking question'
                />
              </div>
              <div className='event-img-one'>
                <Image
                  src='/images/webp/2023-event-img-one.webp'
                  width='280'
                  height='300'
                  alt='Event Image - Group picture'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='arithmetic-container'></div>
      </section>
      <Modal
        isOpen={isSuccessModalOpen}
        onClose={() => {
          setIsSuccessModalOpen(false);
        }}
      >
        <div className='text-center success-modal'>
          <Image
            src='/images/icons/sms-icon.png'
            height={40}
            width={40}
            alt='You have a notification'
          />
          <h5 className='text-xl'>We will notify you!</h5>
          <p className='text-base'>
            You will be the first to know once ticket sales is live. Keep your eyes on your mailbox.
          </p>
          <Button label='Got it' onClick={() => setIsSuccessModalOpen(false)} />
        </div>
      </Modal>
    </>
  );
};
