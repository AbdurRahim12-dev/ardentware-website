const Header_Text = ({ title, description }) => {
  return (
    <div className="text-primary">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-5 text-lg">{description}</p>
    </div>
  );
};

export default Header_Text;
