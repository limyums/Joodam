import { Facebook, Instagram } from 'lucide-react';
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

  return (
    <header className={BASE_CLASS}>
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
    </header>
  );
}
