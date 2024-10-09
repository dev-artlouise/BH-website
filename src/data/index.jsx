import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Lightbulb,
  SlidersVertical,
  SquareTerminal,
  Monitor,
  Smartphone,
  Component,
  SearchCheck,
} from "lucide-react";

import axtoken from "../assets/ax-token.jpg";
import carbonzone from "../assets/Carbonzone.PNG";

import userMale from "../assets/UserBoy.png";

export const team = [
  {
    id: 1,
    fullname: "John Doe",
    position: "CEO",
    message:
      "I couldn't be happier with the outcome of our project The team's creativity and problem-solving skills were instrumental in bringing our vision to life.",
    avatar: userMale,
  },

  {
    id: 2,
    fullname: "John Doe",
    position: "CEO",
    message:
      "This is great bundle. I can contruct anything in just 10 minutes. Absolutely love it! 10 out of 10.",
    avatar: userMale,
  },

  {
    id: 3,
    fullname: "David Johnson",
    position: "CEO",
    message:
      "`Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
    avatar: userMale,
  },

  {
    id: 4,
    fullname: "Ronee Brown",
    position: "CEO",
    message:
      "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
    avatar: userMale,
  },

  {
    id: 5,
    fullname: "Michael Wilson",
    position: "CEO",
    message:
      "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results",
    avatar: userMale,
  },

  {
    id: 6,
    fullname: "Emily Davis",
    position: "CEO",
    message:
      "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
    avatar: userMale,
  },
];

export const companies = [
  {
    id: 1,
    name: "airbnb",
    img: "https://assets.maccarianagency.com/svg/logos/airbnb-original.svg",
  },
  {
    id: 2,
    name: "amazon",
    img: "https://assets.maccarianagency.com/svg/logos/amazon-original.svg",
  },
  {
    id: 3,
    name: "fitbit",
    img: "https://assets.maccarianagency.com/svg/logos/fitbit-original.svg",
  },
  {
    id: 4,
    name: "netflix",
    img: "https://assets.maccarianagency.com/svg/logos/netflix-original.svg",
  },
  {
    id: 5,
    name: "google",
    img: "https://assets.maccarianagency.com/svg/logos/google-original.svg",
  },
  {
    id: 6,
    name: "paypal",
    img: "https://assets.maccarianagency.com/svg/logos/paypal-original.svg",
  },
];

export const contacts = [
  { label: "Email", value: "broadheader2024@gmail.com", icon: <Mail /> },
  { label: "Phone", value: "+63 (999) 9999 999", icon: <Phone /> },
  { label: "Address", value: "Office Address", icon: <MapPin /> },
];

export const socials = [
  { label: "Facebook", icon: <Facebook /> },
  { label: "Instagram", icon: <Instagram /> },
];

export const servicesWeb = [
  {
    label: "Web Development",
    icon: <Monitor height={48} width={48} />,
    description:
      "We design and develop amazing, lightning fast, and high-converting websites that make your business grow.",
  },
  {
    label: "Mobile Development",
    icon: <Smartphone height={48} width={48} />,
    description:
      "We design and develop amazing, lightning fast, and high-converting websites that make your business grow.",
  },
  {
    label: "Product Design",
    icon: <Component height={48} width={48} />,
    description:
      "We help you transform your idea into a live, intuitive and scalable digital product that your users will use and love.",
  },
  {
    label: "Search Engine Optimization (SEO)",
    icon: <SearchCheck height={48} width={48} />,
    description:
      "We help you transform your idea into a live, intuitive and scalable digital product that your users will use and love.",
  },
];

export const services = [
  {
    id: 1,
    title: "Premium Products",
    content:
      "We offer a wide range of high - quality computer products from trusted brands, ensuring durability and reliability.",
  },

  {
    id: 2,
    title: "Extended Warranties",
    content:
      "Enjoy peace of mind with our extended warranties and comprehensive service plans.",
  },

  {
    id: 3,
    title: "Best Prices",
    content:
      "We offer competitive pricing on all our computer products without compromising on quality.",
  },

  {
    id: 4,
    title: "After-Sales Support",
    content:
      " Our dedicated after - sales support team is available to assist you with any issues or questions you may have.",
  },

  {
    id: 5,
    title: "Latest Technology",
    content:
      "Stay ahead with the latest and most innovative technology available on the market.",
  },

  {
    id: 6,
    title: "Custom Solutions",
    content:
      "We provide custom - built computers and configurations to suit your specific needs.",
  },

  {
    id: 7,
    title: "Comprehensive Support",
    content:
      " From setup to troubleshooting, we offer comprehensive support to ensure you get the most out of your products.",
  },
];

export const process = [
  {
    id: 1,
    title: "Idea",
    content:
      "We start by meeting with your team to understand your project idea and objectives. Following this, our team collaborates to develop an action plan and proposal for your project.",
    icon: <Lightbulb height={48} width={48} />,
  },
  {
    id: 2,
    title: "Design",
    content:
      "We begin by creating a mockup or prototype of your website and presenting it to you. With the initial mockup in hand, we then initiate the revision process to refine and perfect it.",
    icon: <SlidersVertical height={48} width={48} />,
  },
  {
    id: 3,
    title: "Development",
    content:
      "We build your website following the best practices and standards to ensure it is fully responsive, incredibly fast, SEO-friendly, and highly scalable.",
    icon: <SquareTerminal height={48} width={48} />,
  },
];

export const projects = [
  {
    id: 1,
    title: "Ax Token",
    content:
      "Axtoken is a cryptocurrency website designed to provide a seamless and user-friendly experience for buying, selling, and trading digital assets. Inspired by platforms like Binance, Axtoken offers a comprehensive suite of tools and features for both novice and experienced crypto enthusiasts.",
    image_url: axtoken,
    category: "Web",
  },

  {
    id: 2,
    title: "Carbonzone",
    content:
      "This portfolio website showcases CarbonZone's exceptional work in car repair and performance upgrades.  It features a gallery of their impressive projects, detailed information about their services, and compelling client testimonials that highlight their expertise in the automotive industry.",
    image_url: carbonzone,
    category: "Web",
  },

  // {
  //   id: 3,
  //   title: "Project 3",
  //   content:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem error",
  //   image_url: "https://via.placeholder.com/150",
  //   category: "Web",
  // },

  // {
  //   id: 4,
  //   title: "Project 4",
  //   content:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem error",
  //   image_url: "https://via.placeholder.com/150",
  //   category: "Mobile",
  // },
];

export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    description:
      "I couldn't be happier with the outcome of our project.The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
    company: "Stellar Solutions",
    positon: "CEO",
    avatar: "",
  },
  {
    id: 2,
    name: "Jane Smith",
    description:
      "This is great bundle. I can contruct anything in just 10 minutes. Absolutely love it! 10 out of 10.",
    avatar: "",
    company: "Blue Horizon Technologies",
    positon: "CEO",
  },
  {
    id: 3,
    name: "David Johnson",
    description: `Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.`,
    avatar: "",
    company: "Quantum Innovations",
    positon: "CEO",
  },

  {
    id: 4,
    name: "Ronee Brown",
    description: `Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!`,
    avatar: "",
    company: "Fusion Dynamics",
    positon: "CEO",
  },

  {
    id: 5,
    name: "Michael Wilson",
    description: `I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.`,
    avatar: "",
    company: "Visionary Creations",
    positon: "CEO",
  },

  {
    id: 6,
    name: "Emily Davis",
    description: `The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.`,
    avatar: "",
    company: "Synergy Systems",
    positon: "CEO",
  },
];
