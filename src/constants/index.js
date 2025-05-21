// import {, Star, Send, Shield} from "../assets"
import ndic from "../assets/ndic.svg"
import Star from "../assets/Star.svg";
import Shield from "../assets/Shield.svg";
import Send from "../assets/Send.svg";
import New from "../assets/New.svg";
import people01 from '../assets/people01.svg'
import people02 from '../assets/people02.svg'
import people03 from '../assets/people03.svg'
import { FaCarAlt, FaSuitcase, FaWallet, FaShoppingBag } from 'react-icons/fa';



export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Credpal Business", link: "#" },
      { name: "Savings and Investment", link: "#" },
      { name: "Credit Builder", link: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Customer terms of use", link: "#" },
      { name: "Merchant Term of service", link: "#" },
      { name: "Credit Builder", link: "#" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { name: "hello@credpal.com", link: "mailto:hello@credpal.com" },
      { name: "+234 708 740 9746", link: "tel:+2347087409746" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQs", link: "#" },
      { name: "Blogs", link: "#" },
      { name: "Delete Account", link: "#" },
    ],
  },
];

export const services = [
  {
    title: 'Ride and Dine Now, Pay Later',
    content:
      'Enjoy seamless payments for your Bolt rides and food orders with CredPal. Choose to pay instantly or later , the flexibility is all yours.',
    icon: FaCarAlt,
    bgColor: 'bg-blue-100',
    iconColor: '#1e3a8a',
  },
  {
    title: 'Travel Smarter with CredPal',
    content:
      'Book flights, hotels, and services effortlessly. Choose to pay now or later, giving you full control over your travel expenses.',
    icon: FaSuitcase,
    bgColor: 'bg-red-100',
    iconColor: '#b91c1c',
  },
  {
    title: 'Pay with CredPal',
    content:
      'Enjoy the freedom to pay for bills and services your way. Choose to pay now or take advantage of our Buy Now, Pay Later option — flexible payments made easy.',
    icon: FaWallet,
    bgColor: 'bg-green-100',
    iconColor: '#065f46',
  },
  {
    title: 'Shop with CredPal',
    content:
      'Explore a wide range of products from top merchants on CredPal’s marketplace. Shop now and enjoy the flexibility to pay in easy installments.',
    icon: FaShoppingBag,
    bgColor: 'bg-purple-100',
    iconColor: '#6b21a8',
  },
];



export const feedback = [
  {
    id: "feedback-1",
    content:
      "CredPal made managing my finances so much easier. From paying for everyday needs to spreading out big purchases, it gave me the freedom I never knew I needed.",
    name: "Adelabu Ramadan",
    title: "6am Abuja",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "With CredPal, I finally started building my credit score while still enjoying life. The app is smooth, flexible, and gives me total control over my money.",
      name: "Tijani Faruk",
    title: "8pm, Lagos",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "I love how CredPal lets me buy now and pay later without the stress. It’s safe, fast, and has completely changed the way I handle my payments.",
    name: "Seun Fashina",
    title: "5:30pm, Borno",
    img: people03,
  },
];

export const cards = [
  {
    id: "new1",
    iconComponent: Star,
    badgeImage: New,
    title: "Security You Can Trust",
    content:
      "We take proactive measures to protect your information and transactions, integrating advanced crypto security protocols to ensure a safe, encrypted, and fraud-resistant payment experience every time.",
  },
  {
    id: "new2",
    iconComponent: Shield,
    title: "Unlock The Best Credit Card Reward",
    content:
      "Enjoy exclusive promotions, cashback, and exciting prizes with every transaction. Spend smarter with CredPal! 🚀",
  },
  {
    id: "new3",
    iconComponent: Send,
    title: "Maximize Savings With Smart Balance Transfers",
    content:
      "Buy what you need, pay how you want! With CredPal, you can pay instantly using Bitcoin or choose Buy Now, Pay Later (BNPL) to split your payments into smaller, easy installments. Fast, secure, and flexible!",
  },
];
















export const stats= [
  {
    id: 1,
    value: "700+",
    label: "active user",
  },
  {
    id: 2,
    value: ndic   ,
    label: "supported",
  },
  {
    id: 3,
    value: "$23m+",
    label: "transaction",
  },
];

export const navLinks = [
  {
    id: "product",
    title: "Product",
  },
  {
    id: "business",
    title: "Business",
  },
  {
    id: "what we do",
    title: "What we do",
  },
  {
    id: "wealth partner",
    title: "Wealth Partner",
  },
];




