type SectionHeadingProps = {
  heading: React.ReactNode;
};

export const SectionHeading = ({ heading }: SectionHeadingProps) => {
  return (
    <h2 className="text-3xl text-center font-semibold capitalize mb-8 sm:text-4xl">
      {heading}
    </h2>
  );
};
