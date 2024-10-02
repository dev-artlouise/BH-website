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
    description:
      "We offer a wide range of high - quality computer products from trusted brands, ensuring durability and reliability.",
  },

  {
    id: 2,
    title: "Extended Warranties",
    description:
      "Enjoy peace of mind with our extended warranties and comprehensive service plans.",
  },

  {
    id: 3,
    title: "Best Prices",
    description:
      "We offer competitive pricing on all our computer products without compromising on quality.",
  },

  {
    id: 4,
    title: "After-Sales Support",
    description:
      " Our dedicated after - sales support team is available to assist you with any issues or questions you may have.",
  },

  {
    id: 5,
    title: "Latest Technology",
    description:
      "Stay ahead with the latest and most innovative technology available on the market.",
  },

  {
    id: 6,
    title: "Custom Solutions",
    description:
      "We provide custom - built computers and configurations to suit your specific needs.",
  },

  {
    id: 7,
    title: "Comprehensive Support",
    description:
      " From setup to troubleshooting, we offer comprehensive support to ensure you get the most out of your products.",
  },
];

export const process = [
  {
    id: 1,
    name: "Idea",
    description:
      "We start by meeting with your team to understand your project idea and objectives. Following this, our team collaborates to develop an action plan and proposal for your project.",
    icon: <Lightbulb height={48} width={48} />,
  },
  {
    id: 2,
    name: "Design",
    description:
      "We begin by creating a mockup or prototype of your website and presenting it to you. With the initial mockup in hand, we then initiate the revision process to refine and perfect it.",
    icon: <SlidersVertical height={48} width={48} />,
  },
  {
    id: 3,
    name: "Development",
    description:
      "We build your website following the best practices and standards to ensure it is fully responsive, incredibly fast, SEO-friendly, and highly scalable.",
    icon: <SquareTerminal height={48} width={48} />,
  },
];

export const projects = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem error",
    image: "https://via.placeholder.com/150",
    category: "Web",
  },

  {
    id: 2,
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem error",
    image: "https://via.placeholder.com/150",
    category: "Mobile",
  },

  {
    id: 3,
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem error",
    image: "https://via.placeholder.com/150",
    category: "Web",
  },

  {
    id: 4,
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem error",
    image: "https://via.placeholder.com/150",
    category: "Mobile",
  },
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
      "This is great bundle. I can contruct anything in just 10 minuts. Absolutelly love it! 10 out of 10.",
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
