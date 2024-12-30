import { Link } from 'react-scroll'; // Import react-scroll's Link

export default function Navbar() {
  return (
    <section id='service-navbar' className='bg-primary sticky top-[5rem] z-20 hidden lg:block'>
      <div className='container flex justify-between items-center py-2'>
        <ul className='flex'>
          {menuItems.map((item) => (
            <li key={item.id}>
              {/* Use react-scroll Link for smooth scrolling */}
              <Link
                to={item.link.substring(1)} // Remove '#' to match the section id
                smooth={true}
                duration={500} // Set the duration of the scroll
                offset={-75} // Optional: adjust scroll offset for fixed header
                className='text-white hover:text-gray-200 cursor-pointer hover:bg-[#1c4893] px-4 py-[.6rem]'
                spy={true}
                activeClass='text-white bg-[#1c4893]'
              >
                {item.id}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const menuItems = [
  {
    id: 'Overview',
    link: '#overview',
  },
  {
    id: 'Video',
    link: '#video',
  },
  {
    id: 'Offerings',
    link: '#offer',
  },
  {
    id: 'Insights',
    link: '#insights',
  },
  {
    id: 'Case studies',
    link: '#case-studies',
  },
  {
    id: 'Our partners',
    link: '#partner',
  },
  {
    id: 'Services',
    link: '#services',
  },
  {
    id: 'Leadership',
    link: '#leadership',
  },
  {
    id: 'Contact us',
    link: '#service-contact',
  },
];
