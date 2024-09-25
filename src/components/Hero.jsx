const Hero = () => {
  return (
    <main className='section_padding hero_bg space-y-6'>
      <div>
        <p className='font-semibold gradient_hero_text uppercase'>
          Get New Solution
        </p>
        <h1 className='text-[15vw] my-0 font-black flex items-center'>
          Copup co{' '}
          <img className='inline-block h-[11.7vw]' src='/svg/i.svg' alt='' /> n
        </h1>
      </div>

      <div className='grid lg:grid-cols-2 lg:gap-10 max-lg:gap-y-8'>
        <button className='gradient_hero_btn py-6 rounded-3xl font-semibold lg:text-6xl text-3xl'>
          BUY COPUP COIN
        </button>

        <div className='space-y-6'>
          <p className='text-gray-text'>
            Copup is the native utility and governance coin created to
            incentivize and reward activities that support the copup ecosystem
          </p>

          <button className='bg-white text-black max-lg:mx-auto font-semibold flex items-center px-8 py-4 rounded-full'>
            Read Whitepaper{' '}
            <img
              className='ms-3 inline-block'
              src='/svg/forward-symbol.svg'
              alt=''
            />
          </button>
        </div>
      </div>

      {/* <img
        className='absolute left-0 bottom-[20%]'
        src='/svg/footer-gradient.svg'
        alt=''
      /> */}
    </main>
  );
};

export default Hero;
