import { Hero } from "./Hero";
import { NavBar } from "./NavBar";
import { TopBar } from "./TopBar";

export const Header = () => {
  return (
    <header>
      <TopBar />
      <NavBar />
      <Hero />
    </header>
  );
};
