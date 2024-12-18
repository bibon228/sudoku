import type { Product } from '../types';

export const products: Product[] = [
  // Гостиная
  {
    id: 'living-1',
    name: 'Кожаный диван "Премиум"',
    description: 'Элегантный 3-местный кожаный диван с хромированными ножками',
    price: 89990,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
    category: 'living',
  },
  {
    id: 'living-2',
    name: 'Журнальный столик "Модерн"',
    description: 'Современный столик из закаленного стекла и металла',
    price: 12990,
    image: 'https://images.unsplash.com/photo-1533090368676-1fd25485db88',
    category: 'living',
  },
  {
    id: 'living-3',
    name: 'Шкаф-витрина "Классик"',
    description: 'Витрина с подсветкой и стеклянными полками',
    price: 45990,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
    category: 'living',
  },

  // Спальня
  {
    id: 'bedroom-1',
    name: 'Кровать "Комфорт Плюс"',
    description: 'Двуспальная кровать с мягким изголовьем и подъемным механизмом',
    price: 54990,
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c',
    category: 'bedroom',
  },
  {
    id: 'bedroom-2',
    name: 'Шкаф-купе "Максимум"',
    description: 'Вместительный шкаф с зеркальными дверями и подсветкой',
    price: 69990,
    image: 'https://images.unsplash.com/photo-1595428772970-6378271c56f7',
    category: 'bedroom',
  },
  {
    id: 'bedroom-3',
    name: 'Туалетный столик "Элегант"',
    description: 'Столик с большим зеркалом и органайзером',
    price: 23990,
    image: 'https://images.unsplash.com/photo-1595428773960-5bea2830b067',
    category: 'bedroom',
  },

  // Столовая
  {
    id: 'dining-1',
    name: 'Обеденный комплект "Семейный"',
    description: 'Стол и 6 стульев из массива дерева',
    price: 79990,
    image: 'https://images.unsplash.com/photo-1617098900591-3f90928e8c54',
    category: 'dining',
  },
  {
    id: 'dining-2',
    name: 'Сервант "Традиция"',
    description: 'Классический сервант для посуды с подсветкой',
    price: 38990,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
    category: 'dining',
  },

  // Офис
  {
    id: 'office-1',
    name: 'Кресло "Эргономик"',
    description: 'Эргономичное кресло с поддержкой поясницы',
    price: 24990,
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8',
    category: 'office',
  },
  {
    id: 'office-2',
    name: 'Рабочий стол "Профи"',
    description: 'Компьютерный стол с регулировкой высоты',
    price: 32990,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
    category: 'office',
  },
  {
    id: 'office-3',
    name: 'Шкаф для документов',
    description: 'Офисный шкаф с замком и регулируемыми полками',
    price: 19990,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
    category: 'office',
  },

  // Кухня
  {
    id: 'kitchen-1',
    name: 'Кухонный гарнитур "Модерн"',
    description: 'Современный гарнитур с встроенной подсветкой',
    price: 149990,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
    category: 'kitchen',
  },
  {
    id: 'kitchen-2',
    name: 'Обеденная группа "Компакт"',
    description: 'Компактный стол и 4 стула для небольшой кухни',
    price: 29990,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
    category: 'kitchen',
  },
];