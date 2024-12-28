import { BiRightArrow } from 'react-icons/bi';

const Service_Hero = () => {
  return (
    <section className='bg-[url("https://www.cognizant.com/content/dam/connectedassets/cognizant-global-marketing/marketing-channels/cognizant-dotcom/en_us/services/images/artificial-intelligence-services-hero-image.jpg")] bg-cover bg-center bg-no-repeat relative'>
      <div className='container text-white'>
        <h1 className='text-[4rem] md:text-[5rem] font-semibold w-full md:w-[58%] leading-tight font-gellix py-[5.5rem]'>
          Empowering better, faster decision-making with data and AI
        </h1>
        <div className='bg-white/85 flex flex-col md:flex-row items-center gap-4 p-4'>
          <div>
            <img
              src='https://cognizant.scene7.com/is/image/cognizant/amf1-a-winning-strategy-thumbnail-042023'
              alt=''
              className='w-[400px] h-[225px] object-cover rounded-lg'
            />
          </div>
          <div className='relative z-10 space-y-4 '>
            <h2 className='text-2xl text-primary font-semibold'>
              AMF1: A winning strategy fueled with insight and speed
            </h2>
            <p className='text-[18px] text-primary pr-10'>
              We’re engineering technology, operations and data so that AMF1 can improve processes,
              speed decision-making and win races—and fans.
            </p>
            <a
              href='#'
              className='flex items-center gap-2 text-lg text-secondary font-semibold w-max'
            >
              <button
                type='submit'
                className='rounded-full bg-secondary px-6 py-3 text-primary text-xl font-bold hover:bg-secondary/60 focus:outline-none focus:ring-2 focus:ring-secobg-secondary focus:ring-offset-2 inline-flex items-center gap-2 duration-300'
              >
                Watch Video <BiRightArrow />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service_Hero;
