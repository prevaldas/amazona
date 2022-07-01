import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Light Linen Sweater',
      slug: 'light-linen-sweater',
      category: 'Sweater',
      image: '/images/p1-0.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'A&F',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      //_id: '2',
      name: 'Light Blue Sweater',
      slug: 'light-blue-sweater',
      category: 'Sweater',
      image: '/images/p2-0.jpg',
      price: 250,
      countInStock: 0,
      brand: 'A&F',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      //_id: '3',
      name: 'Warm Winter Sweater',
      slug: 'warm-winter-sweater',
      category: 'Sweater',
      image: '/images/p3-0.jpg',
      price: 25,
      countInStock: 15,
      brand: 'A&F',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      //_id: '4',
      name: 'Warm Wool Sweater',
      slug: 'warm-wool-sweater',
      category: 'Sweater',
      image: '/images/p4-0.jpg',
      price: 65,
      countInStock: 5,
      brand: 'A&F',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;
