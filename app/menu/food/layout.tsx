import FoodHeader from '@/components/FoodHeader/FoodHeader';

export default function FoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <FoodHeader />
      {children}
    </div>
  );
}
