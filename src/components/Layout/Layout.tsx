import { Footer, Header } from "components";

type LayoutProps = {
  children: Array<React.ReactElement> | React.ReactElement;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
