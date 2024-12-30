import  {motion} from 'motion/react';

export default function Offerings() {
  return (
    <section className='py-14'>
      {/* offer */}
      <div className='container space-y-10 mt-16'>
        <h3 className='text-3xl md:text-5xl  font-semibold'>Offerings</h3>
        <div className='flex flex-col md:flex-row gap-12'>
          <motion.h3
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8, once: true }}
            className=' text-3xl md:text-4xl font-light'
          >
            Data and AI solutions for the <br className='hidden md:block' /> modern enterprise
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.8, once: true }}
            className='flex-1 text-[20px] font-medium text-primary'
          >
            Wherever you are on your journey, in whatever industry you are in—from aggregating vast
            points of data to building sophisticated AI models—Cognizant will meet you there. With
            our innovative offerings you will harness the power of data and AI to drive faster,
            predictive and proactive decisioning, all while educating the organization on your path
            forward.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
