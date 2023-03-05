import { Lora, Open_Sans } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
});
const openSans = Open_Sans({
  subsets: ["latin"],
});

export const Styles = () => {
  return (
    <style jsx global>
      {`
        :root {
          --lora-font: ${lora.style.fontFamily};
          --open-sans-font: ${openSans.style.fontFamily};
        }
      `}
    </style>
  );
};
