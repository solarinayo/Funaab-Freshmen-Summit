'use client';

import Image from 'next/image';
import { classNames } from '@/utils/classNames';
import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  size?: 'sm' | 'md' | 'lg';
  showCloseIcon?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  size = 'md',
  showCloseIcon = true,
  onClose,
  children,
  className,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusedElement.current = document.activeElement as HTMLElement;
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else if (previousFocusedElement.current) {
      previousFocusedElement.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='overlay'>
      <div
        className={classNames('modal', `modal-${size} ${className}`)}
        role='dialog'
        aria-modal='true'
        aria-labelledby='modal-title'
        ref={modalRef}
        tabIndex={-1}
      >
        <div className='modal-content'>
          {showCloseIcon && (
            <div className='close-icon-wrapper'>
              <Image
                src='/images/icons/close-icon.png'
                alt='Close Modal'
                width='30'
                height='30'
                onClick={onClose}
              />
            </div>
          )}

          {children}
        </div>
      </div>
    </div>
  );
};
