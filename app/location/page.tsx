import Image from 'next/image';

const BASE_CLASS = 'location';
export default function Location() {
  return (
    <>
      <div className={BASE_CLASS}>
        <Image
          src="/assets/location.jpg"
          alt="gallery"
          width={600}
          height={700}
          className="locationimg"
        />
        <div className={`${BASE_CLASS}-info`}>
          <div className="title">CALL US </div>
          <div>(403)452-0920 </div>
          <div className="title">FOR GENERAL INQUIRIES</div>{' '}
          <div>joodamcalgary@gmail.com</div>
          <div className="title">1003 9 Ave SE, Calgary, AB</div>
        </div>
        <a target="_blank" href="https://maps.app.goo.gl/DwFbEL5JFRL2zzCX9">
          <Image
            src="/assets/googlemap.png"
            alt="gallery"
            width={800}
            height={550}
            className="locationgoogle"
          />
        </a>
      </div>
    </>
  );
}
