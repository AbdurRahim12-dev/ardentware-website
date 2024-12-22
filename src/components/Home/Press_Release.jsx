import { BiRightArrow } from "react-icons/bi";

const Press_Release = () => {
  return (
    <>
      <div className="bg-accent text-white">
        <div className="container py-8">
          <h5 className="text-sm font-semibold">Press release | December 16, 2024</h5>
          <h2 className="text-2xl mt-7">
            Cognizant is the first IT services provider to achieve ISO 42001:2023 certification{" "}
            <button className="text-sm font-semibold text-secondary inline-flex items-center">
              Read More <BiRightArrow />
            </button>
          </h2>
        </div>
      </div>
      <div className="container py-10">
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-extralight text-primary/90 leading-tight">
          Cognizant helps companies modernize{" "}
          <span className="font-bold text-accent">technology</span>, <br /> reimagine{" "}
          <span className="font-bold text-accent">processes</span> and transform{" "}
          <span className="font-bold text-accent">experiences</span> so they stay ahead in a
          fast-changing world.
        </h4>
      </div>
    </>
  );
};

export default Press_Release;
