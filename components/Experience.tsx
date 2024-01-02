'use client';

import { SectionHeading } from './shared';
import { useSectionInView } from '@/hooks/useSectionInView';
import { experiencesData } from '@/lib/data';
import { Fragment } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Experience = () => {
  const { ref } = useSectionInView('#experience');

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-24 sm:mb-32">
      <SectionHeading heading="Mi Experiencia" />
      <VerticalTimeline lineColor="">
        {experiencesData.map(
          ({ title, location, description, icon, date, color }, index) => (
            <Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                  backgroundColor: '#f3f4f6',
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  textAlign: 'left',
                  padding: '1.5rem 2rem',
                }}
                contentArrowStyle={{
                  borderRight: '0.4rem solid  #9ca3af',
                }}
                date={date}
                icon={icon}
                iconStyle={{
                  background: `${color}`,
                  fontSize: '1.5rem',
                }}
              >
                <h3 className="font-semibold capitalize">{title}</h3>
                <p className="font-normal !mt-0">{location}</p>
                <p className="!mt-3 !font-normal text-justify">{description}</p>
              </VerticalTimelineElement>
            </Fragment>
          )
        )}
      </VerticalTimeline>
    </section>
  );
};
