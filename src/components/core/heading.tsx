const Heading = () => {
  return null;
};

const H1 = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >,
) => {
  return (
    <h1
      className="text-xl md:text-4xl font-bold text-black dark:text-white self-start"
      {...props}
    >
      {props.children}
    </h1>
  );
};

const H2 = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >,
) => (
  <h2
    className="text-xl md:text-4xl font-bold text-black dark:text-white self-start"
    {...props}
  >
    {props.children}
  </h2>
);

Heading.H1 = H1;
Heading.H2 = H2;

export default Heading;
