import { BiRightArrow } from 'react-icons/bi';

const BackTopButton = ({ showButtons }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <div
        className={`fixed bottom-5 right-5 transition-opacity duration-300 ${
          showButtons ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={scrollToTop}
          className='hidden lg:flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white shadow-md hover:bg-primary/80 focus:outline-none'
        >
          <span>Back to top</span>
          <BiRightArrow className='-rotate-90' />
        </button>
      </div>
    </>
  );
};

export default BackTopButton;
