import { LogoIcon } from "icons/LogoIcon";

export const Divider = ({ id }: { id?: string }) => {
  return (
    <div className="flex items-center justify-center w-full" id={id}>
      <div
        className="w-full h-4 from-gold bg-gradient-to-r"
        style={{
          clipPath: "polygon(100% 50%, 0 50%, 100% 10%)",
        }}
      ></div>
      <div className="mx-4">
        <LogoIcon size={40} />
      </div>
      <div
        className="w-full h-4 from-gold bg-gradient-to-l"
        style={{
          clipPath: "polygon(0% 10%, 0 50%, 100% 50%)",
        }}
      ></div>
    </div>
  );
};
