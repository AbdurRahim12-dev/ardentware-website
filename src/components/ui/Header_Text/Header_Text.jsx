const Header_Text = ({ title, description }) => {
  return (
    <div className='text-primary'>
      <h1 className='text-3xl md:text-5xl font-bold font-gellix'>{title}</h1>
      {description && <p className='mt-5 text-lg font-gellix'>{description}</p>}
    </div>
  );
};

export default Header_Text;
