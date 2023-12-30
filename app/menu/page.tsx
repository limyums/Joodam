const BASE_CLASS = 'menu';
export default function Menu() {
  return (
    <>
      <div className={BASE_CLASS}>
        <div className={`${BASE_CLASS}-food`}>
          <a href="/menu/food">
            <div>Food</div>
          </a>
        </div>
        <div className={`${BASE_CLASS}-drink`}>
          <a href="/menu/drink">
            <div>Drink</div>
          </a>
        </div>
      </div>
    </>
  );
}
