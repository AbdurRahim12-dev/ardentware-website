const RoundButton = ({ label, className, icon }) => {
  return (
    <button
      className={`rounded-full px-5 py-2 text-lg font-bold focus:outline-none inline-flex items-center gap-2 duration-300 ${className}`}
    >
      {icon && icon} {label}
    </button>
  );
};

export default RoundButton;
