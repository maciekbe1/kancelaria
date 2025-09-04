import clsx from "clsx";
import { Footer, Header } from "components";
import { Meta } from "components/Meta/Meta";
import useHeaderState from "hooks/useHeaderState";

type LayoutProps = {
  children: Array<React.ReactElement> | React.ReactElement;
};

export const Layout = ({ children }: LayoutProps) => {
  const { isViewportScrolled, isMobile } = useHeaderState();

  return (
    <>
      <Meta />
      <Header />
      <main
        className={clsx(
          "transition-all ease-in-out delay-150",
          isViewportScrolled || isMobile ? "-mt-[64px]" : "-mt-[86px]"
        )}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
