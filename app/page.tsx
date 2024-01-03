import { Experience, Intro, Skills, Tools } from '@/components';
import { Contact } from '@/components/contact';
import { Projects } from '@/components/projects';
import { SectionDivider } from '@/components/shared';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Skills />
      <Tools />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
