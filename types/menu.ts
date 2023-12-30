export interface Menu {
  id: number;
  title: string;
  title_ko: string;
  description: string;
  option: string | string[];
  price: number | number[];
  spicy: number;
  rice: number;
  gf: boolean;
  ve: boolean;
}

export interface Drink {
  id: number;
  title: string;
  description: string;
  volume: string | string[];
  price: number | number[];
}
