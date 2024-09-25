const Footer = () => {
  return (
    <footer className='w-full relative lg:px-16 p-10 grid lg:grid-cols-3 max-lg:gap-y-6 items-center'>
      <div className='lg:px-8'>
        <p className='text-gray-text'>
          Join Coupup today to enjoy great individual benefits and amazing
          airdrops
        </p>

        <ul className='flex gap-5 mt-8 items-center max-lg:justify-center'>
          <li className='rounded-full flex items-center justify-center bg-[#ffffff14] aspect-square size-12'>
            <img src='/svg/facebook.svg' alt='' />
          </li>
          <li className='rounded-full flex items-center justify-center bg-[#ffffff14] aspect-square size-12'>
            <img src='/svg/twitter.svg' alt='' />
          </li>
          <li className='rounded-full flex items-center justify-center bg-[#ffffff14] aspect-square size-12'>
            <img src='/svg/instagram.svg' alt='' />
          </li>
          <li className='rounded-full flex items-center justify-center bg-[#ffffff14] aspect-square size-12'>
            <img src='/svg/telegram.svg' alt='' />
          </li>
        </ul>
      </div>

      <div className='border-x-gray-text max-lg:border-y max-lg:py-8 lg:border-x px-8 text-center'>
        <h2 className='font-semibold uppercase'>SIGN UP FOR EMAIL UPDATES</h2>

        <div className='mt-4 space-y-2 text-sm'>
          <p className='text-gray-text'>
            202 Helga Springs Rd, Crawford, TN <br /> 38554
          </p>
          <p>
            Call Us: <br /> 800.275.8777
            <br />
            iko@company.com
          </p>

          <p className='leading-[3]'>
            Copyright © 2024 IKO. All rights reserved.
          </p>
        </div>
      </div>

      <div className='space-y-6 lg:px-8'>
        <h2 className='font-semibold uppercase max-lg:text-center'>
          SIGN UP FOR EMAIL UPDATES
        </h2>

        <p>Sign up with your email address to receive news and updates</p>

        <form className='w-full relative overflow-hidden bg-white rounded-full flex items-center justify-center py-1'>
          <input
            className='w-full  text-black border-0 ring-0 py-2 px-4 bg-white'
            type='text'
            id='email'
            placeholder='Your Email Address'
            required
          />

          <button
            className='absolute gradient_hero_btn right-1 top-1/2 -translate-y-1/2 font-semibold rounded-full px-5 py-2 text-white'
            type='submit'>
            Subscribe
          </button>
        </form>
      </div>

      <img className='absolute bottom-0 left-0 -top-32' src='/svg/footer-gradient.svg' alt='' />
    </footer>
  );
};

export default Footer;
