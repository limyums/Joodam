'use client';

import { AlignJustify, Facebook, Instagram, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import './Header.scss';
import Image from 'next/image';
import ReserveButton from '../ReserveButton';

const BASE_CLASS = 'header';

export default function Header() {
  const NAV_ITEMS = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Location', path: '/location' },
  ];

  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <header>
      <div className={BASE_CLASS}>
        <div className={`${BASE_CLASS}_logo`}>
          <a href="/">
            <Image
              src="/assets/logo_white.png"
              alt="Joodam"
              width={210}
              height={85}
            />
          </a>
        </div>
        <ul className={`${BASE_CLASS}_links`}>
          {NAV_ITEMS.map(({ name, path }, index) => (
            <li key={`${name}-${index}`}>
              <Link href={path}> {name} </Link>
            </li>
          ))}
          <li>
            <a
              className={`${BASE_CLASS}_item_icons`}
              href="https://www.instagram.com/joodamyyc/"
              target="_blank"
            >
              <Instagram size={25} className="" />
            </a>
          </li>
          <li>
            <a
              className={`${BASE_CLASS}_item_icons`}
              href="https://www.facebook.com/joodamyyc"
              target="_blank"
            >
              <Facebook size={25} className="" />
            </a>
          </li>
          <li>
            <ReserveButton />
          </li>
        </ul>
        <AlignJustify className="mobile" size={45} onClick={handleToggle} />
      </div>
      {isToggled && (
        <div className={`${BASE_CLASS}_mobile`}>
          <div className={`${BASE_CLASS}_mobile_logo`}>
            <a href="/">
              <Image
                src="/assets/logo_white.png"
                alt="Joodam"
                width={180}
                height={80}
              />
            </a>
            <X size={45} onClick={handleToggle} />
          </div>
          <ul className={`${BASE_CLASS}_mobile_links`}>
            {NAV_ITEMS.map(({ name, path }, index) => (
              <li key={`${name}-${index}`}>
                <Link href={path} onClick={handleToggle}>
                  {' '}
                  {name}{' '}
                </Link>
              </li>
            ))}
            <li>
              <a
                className={`${BASE_CLASS}_item_icons`}
                href="https://www.instagram.com/joodamyyc/"
                target="_blank"
                onClick={handleToggle}
              >
                <Instagram size={25} className="" />
              </a>
              <a
                className={`${BASE_CLASS}_item_icons`}
                href="https://www.facebook.com/joodamyyc"
                target="_blank"
                onClick={handleToggle}
              >
                <Facebook size={25} className="" />
              </a>
            </li>
            <li>
              <ReserveButton />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
