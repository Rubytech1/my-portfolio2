import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Suheyb</Heading>
      <Paragraph className="max-w-xl mt-4">
       I&apos;m a full-stack developer passionate about building innovative solutions that drive business growth and enhance user experiences. With extensive experience in developing scalable web applications, I specialize in creating high-performance, user-centric solutions that combine elegant design with robust functionality.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
    </Container>
  );
}