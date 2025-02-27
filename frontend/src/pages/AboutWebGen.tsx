import { RiPenNibLine } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import { WiStars } from "react-icons/wi";
import { IoBulbOutline } from "react-icons/io5";

const AboutWebGen = () => {
  return (
    <>
      <main className="my-16 z-50 flex h-full flex-col items-center justify-center lg:my-0 lg:h-screen">
        <div className="relative mx-auto max-w-3xl 2xl:max-w-5xl">
          <div className="z-10 space-y-8 text-center">
            <span className="rounded-full w-fit mx-auto flex items-center justify-center gap-2 border-2 border-lime-400 px-3 py-1 text-sm font-medium uppercase text-lime-500">
              <BsStars /> New: Our Website Generator just landed!
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-dark md:text-5xl md:leading-snug xl:text-6xl xl:leading-snug 2xl:text-7xl 2xl:leading-snug">
              Create a website in minutes
            </h1>
            <p className="mx-auto w-full px-4 text-base md:w-4/5 md:text-base">
              Our website generator allows you to create a website in minutes
              without any coding. Choose from a variety of components and
              customize them to your liking.
            </p>

            <div className="flex flex-col items-center gap-4">
              <a
                href="/"
                className="transition-300 relative mt-4 inline-block rounded-full border-4 border-lime-400 bg-lime-400 px-6 py-2 font-semibold text-dark hover:bg-lime-50 hover:text-dark"
              >
                Create a website
              </a>
            </div>
          </div>
        </div>

        <img
          //   src={human1}
          alt="Add Task"
          className="absolute bottom-0 left-0 -z-20 hidden h-24 w-auto object-contain mix-blend-darken md:block md:h-64 lg:h-[60vh]"
          draggable="false"
        />
        <img
          //   src={human2}
          alt="Add Task"
          className="absolute bottom-0 right-0 -z-20 hidden h-24 w-auto object-contain mix-blend-darken md:block md:h-64 lg:h-[60vh]"
          draggable="false"
        />
      </main>
    </>
  );
};

export default AboutWebGen;
