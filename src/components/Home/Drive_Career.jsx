import { BiRightArrow } from 'react-icons/bi';

const Drive_Career = () => {
  return (
    <section className='bg-primary text-white'>
      <div className='container grid grid-cols-1 md:grid-cols-2 items-center gap-8 pb-5 md:pb-0'>
        <img
          src='https://cognizant.scene7.com/is/image/cognizant/hp-recruitment-amf1-banner?fmt=png-alpha&'
          alt=''
        />
        <div>
          <h3 className='text-[2rem] md:text-[3rem] tracking-wide leading-tight mb-3'>
            Drive your career <br /> forward. Fast.
          </h3>
          <a
            href='#'
            className='flex items-center gap-2 text-lg text-secondary font-semibold w-max'
          >
            Browse job listings <BiRightArrow className='text-2xl' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Drive_Career;
