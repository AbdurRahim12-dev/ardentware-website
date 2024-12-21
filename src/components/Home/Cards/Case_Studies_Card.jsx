const Case_Studies_Card = ({ data }) => {
  const { category, title, description, image } = data;
  return (
    <div
      className={`bg-cover bg-center min-h-[325px] rounded-xl overflow-hidden relative group`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-primary/60 p-5 text-white translate-y-[10rem] group-hover:translate-y-0 transition-all duration-300 ease-in-out">
        <span className="uppercase text-lg underline underline-offset-[15px]">{category}</span>
        <h3 className="mt-6 text-3xl font-semibold text-secondary">{title}</h3>
        <p className="mt-5 text-xl">{description}</p>
      </div>
    </div>
  );
};

export default Case_Studies_Card;
