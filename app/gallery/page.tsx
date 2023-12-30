import Image from 'next/image';

const BASE_CLASS = 'gallery';
export default function Gallery() {
  return (
    <>
      <div className={BASE_CLASS}>
        <Image
          src="/assets/gallery.jpeg"
          alt="gallery"
          width={700}
          height={500}
        />
        <Image
          src="/assets/gallery1.jpg"
          alt="gallery"
          width={700}
          height={500}
        />
        <Image
          src="/assets/gallery2.jpg"
          alt="gallery"
          width={700}
          height={500}
        />
        <Image
          src="/assets/gallery3.jpg"
          alt="gallery"
          width={700}
          height={500}
        />
        <Image
          src="/assets/gallery4.jpg"
          alt="gallery"
          width={700}
          height={500}
        />
        <Image
          src="/assets/gallery5.jpeg"
          alt="gallery"
          width={700}
          height={500}
        />
        <Image
          src="/assets/gallery6.jpeg"
          alt="gallery"
          width={700}
          height={500}
        />
        <Image src="/assets/wine.jpg" alt="gallery" width={700} height={500} />
        <Image
          src="/assets/joodam.jpg"
          alt="gallery"
          width={700}
          height={500}
        />
        <Image
          src="/assets/cocktail.jpg"
          alt="gallery"
          width={700}
          height={500}
        />
      </div>
    </>
  );
}
