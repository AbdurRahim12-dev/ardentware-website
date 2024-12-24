// import { BiRightArrow } from 'react-icons/bi';

const Press_Release = () => {
  return (
    <>
      <div className='bg-accent text-white'>
        <div className='container py-8'>
          <h2 className='text-2xl'>
            Modernizing Technology, Transforming Experiences
            {/* <button className='text-sm font-semibold text-secondary inline-flex items-center'>
              Read More <BiRightArrow />
            </button> */}
          </h2>
        </div>
      </div>
      <div className='container py-10'>
        <h4 className='text-2xl md:text-3xl lg:text-4xl font-extralight text-primary/90 leading-tight'>
          At <span className='font-bold text-accent'>Ardentware</span>, we empower businesses to
          stay ahead in a rapidly evolving world. By modernizing technology,{' '}
          <span className='font-bold text-accent'>reimagining</span> processes, and transforming
          experiences, we let you focus on your business while we seamlessly manage the technology
          that drives it.
        </h4>
      </div>
    </>
  );
};

export default Press_Release;
