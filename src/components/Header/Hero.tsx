import Image from "next/image";

export const Hero = () => {
  return (
    <div className="w-full h-[600px] flex justify-center items-center overflow-hidden relative bg-black md:-mt-14">
      <Image
        alt="hero"
        src="/images/hero.jpg"
        sizes="(max-width: 768px) 100vw, 50vw"
        fill
        className="opacity-60 object-cover"
      />
      <div className="flex flex-col justify-center items-center px-3">
        <h1 className=" text-center text-3xl md:text-5xl text-white font-bold drop-shadow-lg">
          WELCOME TO <br />
          <span className="text-primary">MY COMPANY</span>
        </h1>
        <p className="mt-5 text-center text-lg text-white opacity-90">
          Making tomorrows widgets today...
        </p>
      </div>
    </div>
  );
};
