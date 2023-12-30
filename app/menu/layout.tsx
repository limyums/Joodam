import FoodHeader from '@/components/FoodHeader/FoodHeader';

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
