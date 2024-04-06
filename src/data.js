import { FaFacebookF, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const NavLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Products',
    path: '/products',
  },

  {
    name: 'Step Order',
    path: '/services',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'FAQ',
    path: '/faq',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

export const ProductsNavLinks = [
  {
    name: 'CASTOR OIL',
    path: '/products/castor',
  },
  {
    name: 'COMMERCIAL GRADE CASTOR OIL',
    path: '/products/commercial',
  },
  {
    name: 'REFINED GRADE CASTOR OIL',
    path: '/products/refined',
  },
  {
    name: 'COLD PRESSED GRADE CASTOR OIL',
    path: '/products/coldpressed',
  },
];

export const AboutNavLinks = [
  {
    name: 'Overview',
    path: '/products/castor',
  },
  {
    name: 'Our Vision',
    path: '/products/commercial',
  },
  {
    name: 'Our Infrastructure',
    path: '/products/refined',
  },
];

// let today = new Date();
// let dd = String(today.getDate()).padStart(2, '0');
// let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// let yyyy = today.getFullYear();
// today = dd + '/' + mm + '/' + yyyy;
let today = new Date().toUTCString().slice(5, 16);

export const BlogData = [
  {
    title: 'Recent post Title',
    img: 'slider-3.webp',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry',
    location: '25 NewYork City',
    time: today,
  },
  {
    title: 'Recent post Title',
    img: 'castor-oil-slide2.webp',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry',
    location: '25 NewYork City',
    time: today,
  },
  {
    title: 'Recent post Title',
    img: 'https://s3-alpha-sig.figma.com/img/e015/cc66/cb0ffc5fe16d37ef6385d4c50b0ec50f?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BQdKgBWKi5wEciQjQ~g7W7aRENGBrDbv3mpvQ2i-v1-dOKqxm~3dzDlXgspoF-h~Z~XX~AvxtIbvJWmMGUVFMt6y4hXGzX3ltjnAPSVrUn~dThR4d6bwOaMIqZdbcjWlmPJVS5IWFu93TUFNrNTXp1bfNsEhM7NjoPC4KZxVV4VqOYQ2oE30PJTs-r2-ocyVII0j8HHCk7V2VUjsPbMpEXBnD9LhT2MEG-XVmADrZfKSwZQjyIW12B5wQR2bYw7JUaeiSQI-wigYl4Jwypn3sr6J~~k3YNpzkEvHl2kCfc~OOtKXmCGzuChJb1OSzLR9geDX-n7-iKLMbv42j7qEEg__',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry',
    location: '25 NewYork City',
    time: today,
  },
  {
    title: 'Recent post Title',
    img: 'https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry',
    location: '25 NewYork City',
    time: today,
  },
  {
    title: 'Recent post Title',
    img: 'https://images.pexels.com/photos/269071/pexels-photo-269071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry',
    location: '25 NewYork City',
    time: today,
  },
  {
    title: 'Recent post Title',
    img: 'https://images.pexels.com/photos/3231359/pexels-photo-3231359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry',
    location: '25 NewYork City',
    time: today,
  },
];

export const ContactData = [
  {
    address:
      'Office No 8.MEZZAINNE FLOOR JAGADISH SANKUL Near KBT CIRCLE, THATTE NAGAR, GANGAPUR ROAD, NASHIK, Maharashtra 422005',
    phone: '+91 8830025846',
    email: 'info@agaoverseas.com',
    socialLinks: [
      {
        icon: FaFacebookF,
        bg: '#316FF6',
        url: 'https://www.facebook.com/',
      },
      {
        icon: FaXTwitter,
        bg: '#000',
        url: 'https://www.twitter.com/',
      },
      {
        icon: FaLinkedinIn,
        bg: '#039FDB',
        url: 'https://www.linkedin.com/',
      },
      {
        icon: FaPinterestP,
        bg: '#E60023',
        url: 'https://www.pinterest.com/',
      },
    ],
  },
];
