import { Product } from "@/types/products";

export const products: Product[] = [
  {
    title: "Moonbeam",
    description: "A modern, minimalist portfolio template built with Next.js and Tailwind CSS.",
    href: "https://moonbeam.vercel.app",
    thumbnail: "/images/sidefolio-moonbeam.png",
    slug: "moonbeam",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"]
  },
  {
    title: "AlgoChurn",
    description: "A platform for practicing coding interviews and algorithmic problems.",
    href: "https://algochurn.com",
    thumbnail: "/images/sidefolio-algochurn.png",
    slug: "algochurn",
    stack: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Aceternity UI",
    description: "A collection of beautiful UI components built with Tailwind CSS.",
    href: "https://ui.aceternity.com",
    thumbnail: "/images/sidefolio-aceternity.png",
    slug: "aceternity",
    stack: ["React", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Tailwind Master Kit",
    description: "Premium Tailwind CSS components and templates.",
    href: "https://tailwindmasterkit.com",
    thumbnail: "/images/sidefolio-tailwindmasterkit.png",
    slug: "tailwind-master-kit",
    stack: ["Tailwind CSS", "Next.js", "TypeScript"]
  }
];