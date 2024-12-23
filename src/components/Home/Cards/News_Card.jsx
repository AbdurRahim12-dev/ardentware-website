import { BiRightArrow } from 'react-icons/bi';

const News_Card = ({ data }) => {
  return (
    <div className='leading-loose'>
      <img src={data.logo} alt='' />
      <span className='text-sm font-semibold text-primary'>Press Release : {data.date}</span>
      <h1 className='text-3xl font-semibold text-accent py-3'>{data?.title}</h1>
      <p className='text-primary text-lg mb-3'>{data?.description}</p>
      <a className='text-accent font-bold text-lg inline-flex items-center gap-1' href={data.link}>
        Read More <BiRightArrow className='text-2xl' />
      </a>
    </div>
  );
};

export default News_Card;
