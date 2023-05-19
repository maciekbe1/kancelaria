import { Lora, Open_Sans, Domine, Raleway } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
});
const openSans = Open_Sans({
  subsets: ["latin"],
});
const domine = Domine({
  subsets: ["latin"],
  weight: "400",
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: "400",
});

export const Styles = () => {
  return (
    <style jsx global>
      {`
        :root {
          --lora-font: ${lora.style.fontFamily};
          --open-sans-font: ${openSans.style.fontFamily};
          --domine-font: ${domine.style.fontFamily};
          --raleway-font: ${raleway.style.fontFamily};
        }
      `}
    </style>
  );
};
