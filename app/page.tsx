import { Intro } from '@/components/Intro';
import { SectionDivider, SectionHeading } from '@/components/shared';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <SectionHeading>experiencia</SectionHeading>
    </main>
  );
}
