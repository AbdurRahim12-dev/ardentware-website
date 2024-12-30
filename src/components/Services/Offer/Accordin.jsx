import { useState } from 'react';
import { BiDownArrow, BiRightArrow } from 'react-icons/bi';
import { motion } from 'motion/react';

export default function Accordion() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className='container px-2'>
      {accordionData.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.8, once: true }}
          key={item.id}
          // className={`mb-[2px] ${
          //   index === accordionData.length - 1 ? 'rounded-b-lg overflow-hidden' : 'rounded-t-lg'
          // }`}
          className={`mb-[2px] ${index === 0 ? 'rounded-t-lg overflow-hidden' : ''} ${
            index === accordionData.length - 1 ? 'rounded-b-lg overflow-hidden' : ''
          }`}
        >
          <button
            onClick={() => toggleItem(item.id)}
            className={`w-full text-left ${item.bgColor} hover:bg-opacity-90 text-white px-6 py-4 flex justify-between items-center group transition-colors duration-200  `}
            aria-expanded={openItem === item.id}
            aria-controls={`content-${item.id}`}
          >
            <span className='text-lg md:text-xl font-semibold'>{item.title}</span>
            <BiDownArrow
              className={`size-6 transition-transform duration-200 ${
                openItem === item.id ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            id={`content-${item.id}`}
            role='region'
            aria-labelledby={`trigger-${item.id}`}
            className={`bg-white overflow-hidden transition-all duration-200 ease-in-out ${
              openItem === item.id ? 'md:max-h-52 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div
              className={`p-5 border-x  ${
                index === accordionData.length - 1 ? 'border-b ' : ''
              } border-gray-400`}
            >
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                viewport={{ amount: 0.8, once: true }}
                className='text-[#0a0a3c] mb-4 text-xl font-medium '
              >
                {item.content}
              </motion.p>
              <a
                href='#'
                className='text-blue-600 text-xl md:text-[1.29rem]  font-semibold hover:text-blue-700 flex items-center group'
              >
                {item.btnText}
                {item.btnText && <BiRightArrow className='size-6' />}
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const accordionData = [
  {
    id: 'generative-ai',
    title: 'Generative AI',
    content:
      'Partner with a proven leader in responsible generative AI, and gain the intuitive technologies that help you collaborate, innovate and create the results you need to future-proof your business.',
    bgColor: 'bg-[#000048]',
    btnText: 'Learn More',
  },
  {
    id: 'data-management',
    title: 'Data management',
    content:
      'Experience the ease of organizing, accessing and deriving insights from your data, empowering your business to make informed decisions while maintaining compliance and safeguarding sensitive information. Trust us to navigate the complexities of data, turning them into opportunities for growth and innovation.',
    bgColor: 'bg-[#091861]',
    btnText: 'Learn More',
  },
  {
    id: 'data-modernization',
    title: 'Data modernization',
    content:
      'Seamlessly migrate legacy systems to a cloud-based architecture, unlocking unparalleled agility and scalability. Stay ahead in the digital landscape with a future-proof data ecosystem, tailored to meet the evolving demands of your business. Cognizant can also help you take advantage of Microsoft Fabric’s end-to-end, SaaS-based analytics solution with our Microsoft Fabric migration services.',
    bgColor: 'bg-[#091861]',
    btnText: 'Learn More',
  },
  {
    id: 'business-intelligence',
    title: 'Business intelligence and visualization',
    content:
      'Drive fast, accurate, and fact-based decisions from contextual and hyper-personalized data to get real business results. Cognizant elevates Business Intelligence beyond KPIs and dashboards to a world of outcome-oriented decisions by connecting data with AI-augmented BI.',
    bgColor: 'bg-[#1c4892]',
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial intelligence',
    content: `Make AI the foundation for your business, automating everyday tasks and enabling rapid, prescriptive decision-making.  

    Cognizant operationalizes AI to reliably deliver efficiency, innovation and agility.`,
    bgColor: 'bg-[#2660ab]',
    btnText: 'Learn More',
  },
  {
    id: 'data-strategy',
    title: 'Data strategy',
    content: `Wherever you are in your data maturity, we’ll align data strategy with your business outcomes to transform your organization.
  
      Cognizant’s approach to data strategy enables co-existence between data innovation and renovation while reducing risk, insulating client impact and accelerating business value. `,
    bgColor: 'bg-[#2f78c4]',
  },
];
