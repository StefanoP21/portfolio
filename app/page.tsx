import { Intro } from '@/components';
import { Projects } from '@/components/projects';
import { SectionDivider } from '@/components/shared';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />

      <Projects />
    </main>
  );
}
