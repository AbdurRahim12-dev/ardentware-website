import { BiRightArrow } from "react-icons/bi";

const Driving_Future = () => {
  return (
    <section className="min-h-[500px] bg-[url('https://cognizant.scene7.com/is/image/cognizant/hp-parallax-belcan')] bg-no-repeat bg-cover bg-center bg-fixed flex items-end">
      <div className="relative bg-blue-900 text-white p-8 w-full h-auto container">
        <div className="absolute inset-0 bg-primary/70"></div>

        <div className="relative z-10 space-y-4">
          <h2 className="text-3xl text-secondary font-bold">
            Driving the future of ER&D with Belcan
          </h2>
          <p className="text-[20px]">
            Belcan expands our engineering research and development (ER&D) and IoT capabilities and
            establishes our leadership in aerospace and defense (A&D).
          </p>
          <a
            href="#"
            className="flex items-center gap-2 text-lg text-secondary font-semibold w-max"
          >
            Know more <BiRightArrow className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Driving_Future;
