type SectionHeadingProps = {
  children: React.ReactNode;
};

export const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="text-3xl font-semibold capitalize mb-8 sm:text-4xl">
      {children}
    </h2>
  );
};
