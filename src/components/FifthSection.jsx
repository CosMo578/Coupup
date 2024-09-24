import GiantCoin from '/images/coin.png';
const FifthSection = () => {
  return (
    <section className='gradient_bg flex flex-col items-center rounded-3xl mx-10 mb-24 mt-32 text-black px-10 lg:flex-row-reverse max-lg:pb-16'>
      <img
        className='-mt-[38%] lg:-mt-[18%] w-full md:w-auto'
        src={GiantCoin}
        alt=''
      />

      <div className='text-center lg:ml-3 lg:text-left'>
        <h2 className='mb-8 text-4xl font-semibold lg:mb-6 lg:text-3xl'>
          Be part of the future
        </h2>
        <p className='mx-auto mb-8 w-[85%] lg:mx-0 lg:w-full'>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity.
        </p>
        <button className='bg-white text-black max-lg:mx-auto font-semibold flex items-center px-8 py-4 rounded-full'>
          Buy Copup{' '}
          <img
            className='ms-3 inline-block'
            src='/svg/forward-symbol.svg'
            alt=''
          />
        </button>
      </div>
    </section>
  );
};

export default FifthSection;
