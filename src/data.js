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

export const FaqData = [
  {
    question: 'WHAT EXACTLY IS AGA OVERSEAS PVT.LTD ?',
    answer:
      'AGA OVERSEAS PVT. LTD. is a prestigious company engaged in Importing & Exporting a wide range of products. We provide superior quality products which are widely accepted by our clients at a reasonable price.',
  },
  {
    question: 'WHERE IS YOUR COMPANY BASED IN INDIA ?',
    answer:
      'Our company is based out in Nashik, Maharashtra, India which is very close to JawaharlalNehru port Mumbai (BOMBAY) also known by Nhava Sheva, BOMBAY AIR CARGO - Chhatrapati Shivaji Maharaj International Airport Mumbai (BOMBAY) and Gujarat’s Mundra, Kandla port.',
  },
  {
    question: 'DO YOU MANUFACTURE ALL THE PRODUCTS DISPLAYED ON THE WEBSITE ?',
    answer:
      'Yes, we are having tie-ups with leading manufacturers and sourcing agencies in all the different fields. We are having an expert team to check and ensure the quality of the products across the country.',
  },
  {
    question: 'WHAT ARE YOUR TERMS OF PACKAGING ?',
    answer:
      'Standard packaging is available from the company and we are flexible in packaging but the Buyer can request for packaging according to their standard requirement.',
  },
  {
    question: 'HOW DO I REQUEST A QUOTE/PRICE LIST/CATALOGUE ?',
    answer:
      'We request you to fill the quotation form mentioned on the website or you can also mail us as per the requirement.',
  },
  {
    question: 'CAN I GET SOME SAMPLES ?',
    answer:
      'Yes, samples will be provided by us free of cost but the Shipping/Courier charge has to be paid by the buyer.',
  },
  {
    question: 'WHAT ARE YOUR TERMS OF PAYMENT ?',
    answer:
      'Payment is accepted in US Dollars OR specified in the quotation sent to you.We Accept Letter of Credit (L/C) as Sight Letter of Credit for Bulk Orders. This payment term involves considerable Bank charges. Any bank charges as per the terms of Letter of Credit must be to the account of the Customer.We Expect Part Payment in Advance that you send a 30% value in advance for larger orders & balance payment payable on Ex Works. This payment term involves Bank charges which are payable by the Buyer. We Expect Full Advance Payment as is the most convenient for small orders as it minimizes the bank charges involved in other methods of payment. You may send T/T payment or Wire Transfer to our Bankers under intimation to us. Our Company also accepts Small Payment in the form of Western Union.',
  },
  {
    question:
      'DO YOU OFFER OTHER PRODUCTS APART FROM YOUR PRODUCT LISTED ON WEBSITE ?',
    answer:
      'Yes, we will offer other products also at the best price available as we are having tie-ups and contracts with several manufacturers. We will be HAPPY to provide guidance regarding your search.',
  },
  {
    question: 'WHAT IS YOUR MODE OF SHIPMENT AND CHARGES ?',
    answer:
      'Shipment modes are Sea Freight and Air Freight. We also use Courier, Post, EMS, and other services upon request by the buyer. The shipping charges may vary according to the size of the shipment, destination, and Mode of dispatch. INCOTERM rates are quoted if you inform us of the exact quantity, destination, and mode of dispatch preferred by the Buyer.',
  },
  {
    question: 'DO YOU HAVE ALL THE CERTIFICATIONS ?',
    answer:
      'Yes, we can share all the information regarding the certifications. It is requested you that make sure to check the country specification.',
  },
  {
    question: 'HOW LONG IT WILL TAKE FOR YOU TO RESPOND OUR ENQUIRY ?',
    answer:
      'We are prompt and available 24X7 in all the chatting tools and video tools like Whatsapp, WeChat, Skype, E-mail, listed contact number on the website.',
  },
];
