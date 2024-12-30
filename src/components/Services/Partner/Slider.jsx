import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  return (
    <div className=' mt-10 px-4 py-16 bg-[#f5f5f2]'>
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.8, once: true }}
        className='relative container h-[600px] md:h-[400px]  rounded-lg  overflow-hidden'
      >
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.8, once: true }}
            className='absolute inset-0 flex items-center'
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8  '>
              <div className='flex items-center justify-center'>
                <motion.img
                  src={slides[currentSlide].image}
                  alt='Peak Matrix'
                  className='max-w-full h-auto'
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className='flex flex-col justify-center space-y-4'>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className='text-accent text-2xl md:text-[25.632px] font-semibold leading-tight'
                >
                  {slides[currentSlide].title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className='text-primary text-[18px] md:text-[20px] font-medium leading-tight'
                >
                  {slides[currentSlide].content}
                </motion.p>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  href='#'
                  className=' text-accent hover:text-accent flex items-center gap-1 text-[19px] font-semibold'
                >
                  Know more
                  <BiRightArrow className='mt-[5px] size-6' />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          title='Previous Slide'
          disabled={currentSlide === 0}
          className='absolute left-0 top-1/2 -translate-y-1/2  transition-all hidden md:block'
        >
          <BiLeftArrow
            className={`text-5xl ${currentSlide === 0 ? 'text-gray-400' : 'text-accent hover:text-accent/80'} font-medium`}
          />
        </button>
        <button
          onClick={nextSlide}
          title='Next Slide'
          disabled={currentSlide === slides.length - 1}
          className='absolute right-0 top-1/2 -translate-y-1/2  transition-all hidden md:block'
        >
          <BiRightArrow
            className={`text-5xl ${currentSlide === slides.length - 1 ? 'text-gray-400' : 'text-accent hover:text-accent/80'} font-medium`}
          />
        </button>

        {/* Slide Indicators */}
        {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2 ">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all mt-10 ${
              currentSlide === index ? "bg-[#1E88E5] w-14" : "bg-gray-300 w-14"
            }`}
          />
        ))}
      </div> */}
        <div className='flex  space-x-2 absolute bottom-0 left-1/2 transform -translate-x-1/2'>
          {Array.from({ length: slides.length }).map((_, index) => {
            return (
              <button
                key={index}
                className={`w-8 h-1.5 rounded-sm bg-accent transition-all duration-300 font-gellix ${
                  currentSlide === index ? 'bg-accent/20' : ''
                }`}
                onClick={() => setCurrentSlide(index)}
                disabled={currentSlide === index}
              />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

const slides = [
  {
    id: 1,
    title: 'Cognizant named a Leader in AI and Generative AI Services PEAK Matrix®  2024',
    content:
      'Everest Group recognized Cognizant as a Leader and Star Performer in its inaugural report, noting our significant investments in innovation, technology partnerships, and AI innovation labs as key strengths driving our success.',
    image:
      'https://cognizant.scene7.com/is/image/cognizant/everest-group-peak-matrix-for-data-analytics-services-2022-image?wid=238&op_sharpen=1&dpr=on,2',
  },
  {
    id: 2,
    title:
      'Cognizant named a Leader in Everest Group Data and Analytics Services PEAK Matrix® Assessment 2022',
    content:
      'We once again achieved the Leader positioning and differentiated ourselves with our strengthened cloud partnerships ecosystem, IP-led D&A delivery services strategy and investments in expanding the features of our AI platform and offerings, including LEAF.',
    image:
      'https://cognizant.scene7.com/is/image/cognizant/everest-group-peak-matrix-for-data-analytics-services-2022-image?wid=238&op_sharpen=1&dpr=on,2',
  },
  // Add more slides as needed
];
