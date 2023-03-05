import cslx from "clsx";

type ContainerProps = {
  children: Array<React.ReactElement> | React.ReactElement | string;
  className?: string;
};
const classes = {
  base: "container mx-auto px-6 xl:px-0 py-4",
};
export const Container = ({ children, className }: ContainerProps) => {
  return <div className={cslx(classes.base, className)}>{children}</div>;
};
