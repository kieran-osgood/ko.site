type ExtractTextProps<T> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;

const joinClx = (baseClass: string) => (overrideClass?: string) =>
  overrideClass ? `${baseClass} ${overrideClass}` : baseClass;

type TextProps = ExtractTextProps<HTMLParagraphElement>;
const _Text = (props: TextProps) => (
  <p {...props} className={joinClx("dark:text-white")(props.className)}>
    {props.children}
  </p>
);

type HeadingProps = ExtractTextProps<HTMLHeadingElement>;

const H1 = (props: HeadingProps) => (
  <h1
    {...props}
    className={joinClx(
      "text-4xl md:text-5xl lg:text-8xl font-bold dark:text-white",
    )(props.className)}
  >
    {props.children}
  </h1>
);

const H2 = (props: HeadingProps) => (
  <h2
    {...props}
    className={joinClx(
      "text-3xl md:text-4xl font-bold dark:text-white pb-6 md:pb-10",
    )(props.className)}
  >
    {props.children}
  </h2>
);

const H3 = (props: HeadingProps) => (
  <h3
    {...props}
    className={joinClx(
      "text-2xl md:text-3xl font-bold text-gray-800 dark:text-white",
    )(props.className)}
  >
    {props.children}
  </h3>
);

function Text() {
  if (import.meta.env.DEV) {
    throw new Error("This is not a component - did you mean `<Text.Text />`");
  }

  return null;
}

Text.Text = _Text;
Text.H1 = H1;
Text.H2 = H2;
Text.H3 = H3;

export default Text;
