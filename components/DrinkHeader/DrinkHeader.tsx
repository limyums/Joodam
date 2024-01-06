import './DrinkHeader.scss';
const BASE_CLASS = 'drinkheader';

export default function DrinkHeader() {
  const NAV_ITEMS = [
    { name: 'Cocktails', path: '#cocktails' },
    { name: 'Whiskey', path: '#whiskey' },
    { name: 'Beer', path: '#beer' },
    { name: 'Korean', path: '#korean' },
    { name: 'Wine', path: '#wine' },
    { name: 'Sake', path: '#sake' },
    { name: 'Non-Alcoholic', path: '#nonalcoholic' },
    { name: 'Coffee&Tea', path: '#coffeetea' },
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
