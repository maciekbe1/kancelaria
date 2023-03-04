import { Container, Drawer } from "components";

type LayoutProps = {
  children: Array<React.ReactElement> | React.ReactElement;
};

export const Layout = ({ children }: LayoutProps) => {
  return <>{children}</>;
};
