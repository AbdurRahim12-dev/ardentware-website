import { BiRightArrow } from "react-icons/bi";

const Fixed_Bg_Card = ({ image, title, description, buttonText }) => {
  return (
    <section
      className="min-h-[500px] bg-no-repeat bg-cover bg-center bg-fixed flex items-end"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="relative text-white p-8 w-full h-auto container">
        <div className="absolute inset-0 bg-primary/80"></div>

        <div className="relative z-10 space-y-4">
          <h2 className="text-2xl text-secondary font-semibold">{title}</h2>
          <p className="text-[20px]">{description}</p>
          <a
            href="#"
            className="flex items-center gap-2 text-lg text-secondary font-semibold w-max"
          >
            {buttonText} <BiRightArrow className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Fixed_Bg_Card;
