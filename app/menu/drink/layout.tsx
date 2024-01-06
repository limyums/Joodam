import DrinkHeader from '@/components/DrinkHeader/DrinkHeader';

export default function MenuLayout({
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
