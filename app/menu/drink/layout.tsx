import DrinkHeader from '@/components/DrinkHeader/DrinkHeader';

export default function DrinkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DrinkHeader />
      {children}
    </div>
  );
}
