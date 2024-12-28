// import { Linkedin } from 'lucide-react'
// import Image from "next/image"

import { BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function LeadershipProfile() {
  return (
    <div className=' bg-[#000033] text-white py-12 px-4'>
      <div className='container'>
        <h1 className='text-5xl font-medium mb-12'>Leadership</h1>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
       {profiles.map((profile) => {
          return (
            <div key={profile.id} className='max-w-sm '>
              <div className='mb-6'>
                <img
                  src='https://cognizant.scene7.com/is/image/cognizant/naveen-sharma-profile?fmt=png-alpha'
                  alt='Leadership profile photo'
                  width={400}
                  height={400}
                  className='w-full aspect-square object-cover bg-gray-400'
                />
              </div>

              <h2 className='text-2xl font-medium mb-2'>{profile.name}</h2>

              <p className='text-lg mb-4'>{profile.profession}</p>

              {Object.keys(profile.socialMediaIcons).map((key) => {
                return (
                  <a
                    key={key}
                    href='#'
                    className='inline-block text-[#00ffff] hover:text-[#00cccc] transition-colors mr-3'
                  >
                    {profile.socialMediaIcons[key]}
                  </a>
                );
              })}
            </div>
          );
        })}
       </div>

      </div>
    </div>
  );
}

const profiles = [
  {
    id: 1,
    name: 'Naveen Sharma',
    profession: 'SVP and Global Practice Head, Data and AI',
    socialMediaIcons: {
      linkedin: <BiLogoLinkedin size={24} />,
    //   twitter: <BiLogoTwitter size={24} />,
      // facebook: <BiLogoFacebook size={24} />,
    },
  },
  

];
