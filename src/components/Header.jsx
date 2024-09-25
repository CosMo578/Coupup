/* eslint-disable react/prop-types */

const Header = ({ isOpen, setIsOpen }) => {
  return (
    <header className='relative lg:px-10 p-4 lg:py-8 bg-[#0F101E] flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <button
          className='lg:hidden z-30 cursor-pointer'
          onClick={() => setIsOpen((prev) => !prev)}>
          {!isOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='ionicon size-[50px]'
              viewBox='0 0 512 512'>
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeMiterlimit='10'
                strokeWidth='32'
                d='M80 160h352M80 256h352M80 352h352'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='ionicon size-[50px] '
              viewBox='0 0 512 512'>
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='32'
                d='M368 368L144 144M368 144L144 368'
              />
            </svg>
          )}
        </button>
        <img src='/svg/logo.svg' alt='logo' width={50} height={50} />
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
    </header>
  );
};

export default Header;
