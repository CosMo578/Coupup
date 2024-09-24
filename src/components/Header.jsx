import { useState } from 'react';
import logo from '/svg/logo.svg';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='w-full lg:px-10 p-4 lg:py-8 bg-[#0F101E] flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <button
          className='lg:hidden z-30'
          onClick={() => setIsOpen((prev) => !prev)}>
          open
        </button>
        <img src={logo} alt='logo' width={50} height={50} />
      </div>
      <nav className='mx-auto hidden lg:block'>
        <ul className='flex font-semibold gap-8 uppercase'>
          <li>Home</li>
          <li>Auctions</li>
          <li>Task</li>
          <li>Games</li>
          <li>Wallet</li>
        </ul>
      </nav>
      <button className='font-semibold bg-white rounded-full lg:px-8 px-4 py-2 lg:py-4 text-black'>
        Connect wallet
      </button>
      <ul
        className={`absolute lg:hidden z-40 gradient_hero_btn top-[18%] text-center rounded-2xl py-8 left-[8%] right-[8%] flex flex-col justify-center font-semibold uppercase transition-all
          ${!isOpen && 'hidden'}`}>
        <li className='p-6 hover:bg-white hover:text-[#010314] transition-colors cursor-pointer'>
          Home
        </li>
        <li className='p-6 hover:bg-white hover:text-[#010314] transition-colors cursor-pointer'>
          Auctions
        </li>
        <li className='p-6 hover:bg-white hover:text-[#010314] transition-colors cursor-pointer'>
          Task
        </li>
        <li className='p-6 hover:bg-white hover:text-[#010314] transition-colors cursor-pointer'>
          Games
        </li>
        <li className='p-6 hover:bg-white hover:text-[#010314] transition-colors cursor-pointer'>
          Wallet
        </li>
      </ul>
    </header>
  );
};

export default Header;
