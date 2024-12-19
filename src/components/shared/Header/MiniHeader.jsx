import { TbWorld } from "react-icons/tb";

const MiniHeader = () => {
  const MenuItems = [
    {
      title: "Careers",
      url: "#",
    },
    {
      title: "News",
      url: "#",
    },
    {
      title: "Events",
      url: "#",
    },
    {
      title: "Investors",
      url: "#",
    },
    {
      title: "US-EN",
      url: "#",
      icon: <TbWorld className="pb-1 text-2xl" />,
    },
  ];
  return (
    <section className="container">
      <div className="flex items-center justify-end py-2 text-primary text-sm">
        {MenuItems.map((item, index) => {
          return (
            <a
              key={index + 1}
              href={item.url}
              className="text-gray-500 hover:text-gray-900 flex items-center mr-4"
            >
              {item.title} {item.icon}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default MiniHeader;
