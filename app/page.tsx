const BASE_CLASS = 'home';

export default function Home() {
  return (
    <>
      <div className={BASE_CLASS}>
        <div className={`${BASE_CLASS}-wrap`}>
          <div className={`${BASE_CLASS}-item`}>
            <a href="/menu/food">Food</a>
          </div>
          <div className={`${BASE_CLASS}-item`}>
            <a href="/menu/drink">Drink</a>
          </div>
          <div className={`${BASE_CLASS}-item`}>
            <a
              href="https://www.opentable.ca/restref/client/?lang=en-CA&ot_source=Restaurant%20website&restref=1258960&corrid=befd898d-281a-4b88-bd26-9746336d6059"
              target="_blank"
            >
              Reserve
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
