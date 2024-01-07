'use client';
import { gsap } from 'gsap';
import { useEffect as UseEffect, useRef as UseRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Facebook, Instagram } from 'lucide-react';
import './Footer.scss';
import ReserveButton from '../ReserveButton';
import Image from 'next/image';

const BASE_CLASS = 'footer';

export default function Footer() {
  gsap.registerPlugin(ScrollTrigger);
  const itemRef = UseRef(null);

  UseEffect(() => {
    gsap.fromTo(
      '.footer',
      {
        opacity: 0.5,
      },
      {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: '.footer',
        },
      }
    );
  });
  return (
    <>
      <footer ref={itemRef} className={BASE_CLASS}>
        <div className={`${BASE_CLASS}_item`}>
          <div className={`${BASE_CLASS}_item_title`}>CONTACT</div>
          <div>1003 9 Ave SE, Calgary, AB</div>
          <div>joodamcalgary@gmail.com</div>
          <div>(403)452-0920</div>
        </div>
        <div className={`${BASE_CLASS}_item`}>
          <div className={`${BASE_CLASS}_item_title`}>
            <Image
              src="/assets/logo_black.png"
              alt="Joodam"
              width={210}
              height={85}
            />
          </div>
          <div>
            <a
              className={`${BASE_CLASS}_item_icons`}
              href="https://www.instagram.com/joodamyyc/"
              target="_blank"
            >
              <Instagram size={30} className="" />
            </a>
            <a
              className={`${BASE_CLASS}_item_icons`}
              href="https://www.facebook.com/joodamyyc"
              target="_blank"
            >
              <Facebook size={30} className="" />
            </a>
          </div>
        </div>
        <div className={`${BASE_CLASS}_item`}>
          <div className={`${BASE_CLASS}_item_title`}>HOURS</div>
          <div>Mon ~ Thurs - 5PM - Midnight</div>
          <div>Fri - 5PM - 2AM</div>
          <div>Sat - Noon - 2AM</div>
          <div>Sun - Noon - 10PM</div>
          <ReserveButton />
        </div>
      </footer>
    </>
  );
}
