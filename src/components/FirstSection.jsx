const FirstSection = () => {
  return (
    <section className='first_section section_padding w-full h-max relative'>
      <div className='space-y-2 text-center mb-10'>
        <p className='gradient_text uppercase max-lg:text-sm font-bold'>
          About Copup
        </p>

        <h2 className='lg:text-5xl text-2xl font-bold'>Why Copup?</h2>

        <p className='text-sm text-gray-text mx-auto max-lg:w-[70%] w-[38%]'>
          Copup will make you so rich and you’ll be so speechless that will
          leave you having ountless orgasim{' '}
        </p>
      </div>

      <div className='grid lg:grid-cols-2 gap-8'>
        <div className='row-span-2 lg:py-14 py-10 px-12 z-[3] space-y-5 bg-dark-bg rounded-2xl'>
          <h2 className='text-3xl '>Auction</h2>

          <div className='space-y-2'>
            <p className='text-gray-text'>
              Join exciting auctions and win amazing items. Experience the
              thrill of bidding on unique products, from rare collectibles to
              the latest gadgets.
            </p>

            <ul className='list-disc list-inside'>
              <li>Auction a wide range of items</li>
              <li>Place bids using copup ticket </li>
              <li>Stay tuned to copup news</li>
            </ul>
          </div>

          <img className='pt-8' src='/svg/3D-flat-coin.svg' alt='' />
        </div>

        <div className='bg-dark-bg relative max-lg:flex flex-col max-lg:text-center items-center lg:py-20 py-10 px-12 space-y-5 rounded-2xl'>
          <h2 className='text-3xl '>Games</h2>

          <div className='lg:w-[70%]'>
            <p className='text-gray-text'>
              Play fun games and earn rewards. Dive into a world of
              entertainment with a variety of exciting games that challenge your
              skills and creativity.
            </p>
          </div>

          <img
            className='max-lg:mx-auto  lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-right-[15%]'
            src='/svg/blockchain.svg'
            alt=''
          />
        </div>

        <div className='bg-dark-bg relative max-lg:flex flex-col max-lg:text-center items-center lg:py-20 py-10 px-12 space-y-5 rounded-2xl'>
          <h2 className='text-3xl'>Wallet</h2>

          <div className='lg:w-[70%]'>
            <p className='text-gray-text'>
              Manage your points and rewards in your wallet. Keep track of all
              your earned points and rewards in one convenient place.
              <br /> <br />
              We’ve worked with over 400 companies to build
            </p>

            <img
              className='max-lg:mx-auto lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-right-[10%]'
              src='/svg/phone.svg'
              alt=''
            />
          </div>
        </div>
      </div>

      {/* <img
        className='absolute z-[10] top-0 left-0'
        src='/svg/folating-gradient.svg'
        alt=''
      /> */}
    </section>
  );
};

export default FirstSection;
