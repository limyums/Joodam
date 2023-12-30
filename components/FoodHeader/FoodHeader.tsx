import './FoodHeader.scss';
const BASE_CLASS = 'foodheader';

export default function FoodHeader() {
  const NAV_ITEMS = [
    { name: 'Appetizer', path: '#appetizer' },
    { name: 'Anju', path: '#anju' },
    { name: 'Hotpot', path: '#hotpot' },
    { name: 'Meal', path: '#meal' },
    { name: 'Dessert', path: '#dessert' },
  ];

  return (
    <div className={BASE_CLASS}>
      <ul className={`${BASE_CLASS}_links`}>
        {NAV_ITEMS.map(({ name, path }, index) => (
          <li key={`${name}-${index}`}>
            <a href={path}> {name} </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
