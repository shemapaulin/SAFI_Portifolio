import React from 'react';
import {ImFacebook,ImTwitter,ImInstagram,ImYoutube} from 'react-icons/im'
const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-5 '>
    <li className='text-white  hover:text-amber-900' >
      <a href='https://www.facebook.com/erneste.safi'><ImFacebook/></a>
    </li>
    <li className='text-white  hover:text-amber-900' >
      <a href='/'><ImTwitter/></a>
    </li>
    <li className='text-white  hover:text-amber-900' >
      <a href='https://www.instagram.com/safi.erneste/'><ImInstagram/></a>
    </li>
    <li className='text-white  hover:text-amber-900' >
      <a href='/'><ImYoutube/></a>
    </li>
    </ul>
  </div>;
};

export default Socials;
