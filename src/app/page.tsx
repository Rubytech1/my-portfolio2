import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Suheyb</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a front-end developer based in Toronto, Canada. I have worked on a wide range of front-end projects, from Fitness applications to Transportation booking platforms, focusing on creating clean, well-crafted interfaces that look great and provide a seamless user experience.
      </Paragraph>
    </Container>
  );
}