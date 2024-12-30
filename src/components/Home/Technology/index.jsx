import { useState } from 'react';
import { motion } from 'motion/react';

const leftServices = [
  {
    title: 'Android Development',
    content: 'Android Development',
  },
  { title: 'iOS Development', content: 'iOS Development' },
  { title: 'React Native Development', content: 'React Native Development' },
  { title: 'PHP/Node JS Development', content: 'Backend development services' },
  {
    title: 'Networking & Infrastructure solution for Small to Enterprise organization',
    content: 'Networking & Infrastructure solution for Small to Enterprise organization',
  },
  { title: 'IT Operations', content: 'IT Operations ' },
  { title: 'Artificial Intelligence', content: 'Artificial Intelligence ' },
];

const rightServices = [
  { title: 'VDI and Application virtualization', content: 'VDI and Application virtualization' },
  { title: 'Cloud Services', content: 'Cloud Services ' },
  { title: 'AI and Machine Learning', content: 'AI and Machine Learning' },
  { title: 'UI/UX Design', content: 'User interface and experience design' },
  { title: 'Testing & QA', content: 'Quality assurance and testing' },
  {
    title: 'Microsoft Exchange, Active Directory and Office 365',
    content: 'Microsoft Exchange, Active Directory and Office 365 ',
  },
  { title: 'Flutter Development', content: 'Flutter Development' },
  { title: 'Ionic Development', content: 'Ionic Development' },
];

export default function Technology() {
  const [expandedItem] = useState(leftServices[0].title);

  // const toggleItem = (title) => {
  //   setExpandedItem(prev => (prev === title ? null : title)) // Close the current item if it's already open
  // }

  return (
    <div className='relative bg-white px-5'>
      {/* Content */}
      <div className='container  py-20'>
        <div className='grid gap-12 md:grid-cols-2 '>
          {/* Left Column - Hero Text */}
          <div className='w-full md:border-r-2'>
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.8, once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-3xl font-medium font-gellix leading-tight text-gray-900 sm:text-4xl md:text-5xl md:leading-tight md:mt-60  '
            >
              We empower companies to stay ahead by acting with clarity and agility.
            </motion.h1>
          </div>

          {/* Right Column - Services Grid */}
          <div className='grid gap-8 lg:grid-cols-2'>
            {/* Left Services */}
            <div className='space-y-4'>
              {leftServices.map((service) => (
                <motion.div
                  key={service.title}
                  className='border-b border-gray-200'
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <button
                    // onClick={() => toggleItem(service.title)}
                    className='flex w-full items-center justify-between align-middle py-4 text-left text-gray-900 space-x-8 font-gellix'
                  >
                    <a href=''>
                      <motion.span
                        className='font-medium transition-all duration-300 ease-in-out text-xl sm:text-xl md:text-2xl hover:text-[#45C4B0]'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {service.title}
                      </motion.span>
                    </a>
                    {/* <FaPlus
                    className={`size-4 transform text-[#45C4B0] transition-transform ${
                      expandedItem === service.title ? 'rotate-45' : ''
                    }`}
                  /> */}
                  </button>
                  <motion.div
                    className={`overflow-hidden ${
                      expandedItem === service.title ? 'max-h-[1000px] pb-4' : 'max-h-0'
                    }`}
                    initial={{ height: 0 }}
                    animate={{
                      height: expandedItem === service.title ? 'auto' : 0,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: 'easeInOut',
                    }}
                  >
                    {/* {expandedItem === service.title && (
                      <div className='text-md text-gray-600'>{service.content}</div>
                    )} */}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Right Services */}
            <div className='space-y-4'>
              {rightServices.map((service) => (
                <motion.div
                  key={service.title}
                  className='border-b border-gray-200'
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.8, once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <button
                    // onClick={() => toggleItem(service.title)}
                    className='flex w-full items-center justify-between py-4 text-left text-gray-900 font-gellix'
                  >
                    <a href=''>
                      <span className='font-medium text-xl transition-all duration-300 ease-in-out sm:text-xl md:text-2xl hover:text-[#45C4B0]'>
                        {service.title}
                      </span>
                    </a>
                    {/* <FaPlus
                    className={`size-4 transform text-[#45C4B0] transition-transform ${
                      expandedItem === service.title ? 'rotate-45' : ''
                    }`}
                  /> */}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedItem === service.title ? 'max-h-[1000px] pb-4' : 'max-h-0'
                    }`}
                  >
                    {/* {expandedItem === service.title && (
                      <div className='text-md text-gray-600'>{service.content}</div>
                    )} */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
