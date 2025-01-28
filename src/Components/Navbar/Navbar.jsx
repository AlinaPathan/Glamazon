import React from 'react';
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";




const Navbar = () => {
  return (
  <nav className='bg-Rosequartz mt-4 p-3  px-20 mx-10 text-white rounded-lg flex items-center justify-between '>
    <h1 className='font-semibold text-xl'>GLAMAZON</h1>
    <div className='flex items-center bg-white px-2 rounded-xl '>
    <input type="text"  className='w-80  h-6 p-1 rounded-xl outline-none text-Rosequartz '/>
    <CiSearch className="bg-white h-6 w-6 text-Rosequartz font-semibold p-1 rounded-xl " />
    </div>

    <div className='flex justify-between gap-8 items-center'>
      <button>LOGIN</button>
      <PiShoppingCartSimpleLight className="w-6 h-auto font-bold"/>
      <IoIosNotificationsOutline className="w-6 h-auto font-bold" />

      <BiDotsVerticalRounded className="w-6 h-auto font-bold"/>


    </div>
  </nav>

  );
};

export default Navbar;
