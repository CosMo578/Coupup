const ThirdSection = () => {
  return (
    <div className='lg:px-32 px-8 py-10'>
      <div className='space-y-2 text-center mb-10'>
        <p className='gradient_text uppercase max-lg:text-sm font-bold'>
          Testimonial
        </p>

        <h2 className='lg:text-4xl text-2xl font-bold'>
          Community Testimonial
        </h2>
      </div>

      <div
        id='animation-carousel'
        className='gradient_bg rounded-3xl text-black mt-16 relative w-full'
        data-carousel='slide'>
        {/* <!-- Carousel wrapper --> */}
        <div className='relative h-[60vh] overflow-hidden rounded-lg lg:h-[72vh]'>
          {/* <!-- Item 1 --> */}
          <div
            className='hidden duration-700 ease-in-out bg-blue-primary relative top-1/2 -translate-y-1/2'
            data-carousel-item>
            <div className='grid lg:grid-cols-2 gap-14 items-center max-lg:px-16 xl:mx-20'>
              <div className='space-y-6 hidden lg:block'>
                <div className='flex items-center justify-between'>
                  <div className='flex gap-4 items-center'>
                    <img src='/images/car-img-1.png' alt='' />

                    <div>
                      <h2 className='font-semibold text-lg'>David Liyan</h2>
                      <p className='text-sm'>Twitter</p>
                    </div>
                  </div>

                  <img src='/svg/stars.svg' alt='' />
                </div>

                <p className='text-3xl font-semibold'>
                  I&apos;ve tested numerous token, but this one is leaps and
                  bounds ahead of the competition. It&apos;s phenomenal.
                </p>
              </div>

              <div className='space-y-6'>
                <div className='flex items-center justify-between'>
                  <div className='flex gap-4 items-center'>
                    <img src='/images/car-img-2.png' alt='' />
                    <div>
                      <h2 className='font-semibold text-lg'>Robert Fox</h2>
                      <p className='text-sm'>Telegram</p>
                    </div>
                  </div>
                  <img src='/svg/stars.svg' alt='' />
                </div>

                <p className='text-3xl font-semibold'>
                  I&apos;ve tested numerous token, but this one is leaps and
                  bounds ahead of the competition. It&apos;s phenomenal.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Item 2 --> */}
          {/* <div
            className='hidden duration-700 ease-in-out bg-blue-primary relative top-1/2 -translate-y-1/2'
            data-carousel-item>
            <div className='grid lg:grid-cols-2 gap-14 items-center max-lg:px-16 xl:mx-20'>
              <div className='space-y-6 hidden lg:block'>
                <div className='flex items-center justify-between'>
                  <div className='flex gap-4 items-center'>
                    <img src='/images/car-img-1.png' alt='' />

                    <div>
                      <h2 className='font-semibold text-lg'>David Liyan</h2>
                      <p className='text-sm'>Twitter</p>
                    </div>
                  </div>

                  <img src='/svg/stars.svg' alt='' />
                </div>

                <p className='text-3xl font-semibold'>
                  I&apos;ve tested numerous token, but this one is leaps and
                  bounds ahead of the competition. It&apos;s phenomenal.
                </p>
              </div>

              <div className='space-y-6'>
                <div className='flex items-center justify-between'>
                  <div className='flex gap-4 items-center'>
                    <img src='/images/car-img-2.png' alt='' />
                    <div>
                      <h2 className='font-semibold text-lg'>Robert Fox</h2>
                      <p className='text-sm'>Telegram</p>
                    </div>
                  </div>
                  <img src='/svg/stars.svg' alt='' />
                </div>

                <p className='text-3xl font-semibold'>
                  I&apos;ve tested numerous token, but this one is leaps and
                  bounds ahead of the competition. It&apos;s phenomenal.
                </p>
              </div>
            </div>
          </div> */}
        </div>

        {/* <!-- Slider controls --> */}
        <button
          type='button'
          className='absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-prev>
          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              className='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'>
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 1 1 5l4 4'
              />
            </svg>
            <span className='sr-only'>Previous</span>
          </span>
        </button>

        <button
          type='button'
          className='absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-next>
          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              className='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'>
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 9 4-4-4-4'
              />
            </svg>
            <span className='sr-only'>Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ThirdSection;
