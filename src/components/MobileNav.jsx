/* eslint-disable react/prop-types */
function MobileNav({ isOpen }) {
  return (
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
  );
}

export default MobileNav;
