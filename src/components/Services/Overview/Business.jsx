import { motion } from "motion/react"

export default function Business() {
  const text =
    'Business growth requires better decision making. Trusted intelligence with data and AI enables you to outpace dynamic markets and anticipate change—as if on intuition.';
  // Split the text into words
  const words = text.split(' ');

  return (
    <section className=''>
      <div className='container py-12'>
        <motion.h3
          className='text-primary text-3xl md:text-5xl font-semibold !leading-tight'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              className='inline-block'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.8 }}
              transition={{
                delay: index * 0.1, // Add delay for each word
                type: 'spring',
                stiffness: 100,
                damping: 20,
              }}
            >
              {word}&nbsp; {/* Add non-breaking space between words */}
            </motion.span>
          ))}
        </motion.h3>
      </div>
    </section>
  );
}
