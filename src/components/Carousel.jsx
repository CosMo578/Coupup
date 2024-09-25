const Carousel = () => {
  return (
    <section className='carousel w-full gradient_bg rounded-3xl text-black mt-16 relative py-20'>
      <div id='slide1' className='carousel-item relative w-full'>
        <div className='lg:grid lg:grid-cols-2 grid-rows-1 lg:gap-14 lg:items-center px-8 lg:mx-20'>
          <div className='space-y-6'>
            <div className='flex items-center justify-between'>
              <div className='flex gap-4 items-center'>
                <img src='/images/car-img-1.png' alt='' />

                <div>
                  <h2 className='font-semibold text-lg'>David Liyan</h2>
                  <p className='text-sm'>Twitter</p>
                  <img className='lg:hidden mt-3' src='/svg/stars.svg' alt='' />
                </div>
              </div>

              <img className='hidden' src='/svg/stars.svg' alt='' />
            </div>

            <p className='lg:text-3xl text-xl lg:font-semibold'>
              I&apos;ve tested numerous token, but this one is leaps and bounds
              ahead of the competition. It&apos;s phenomenal.
            </p>
          </div>

          <div className='space-y-6 hidden lg:block'>
            <div className='flex items-center justify-between'>
              <div className='flex gap-4 items-center'>
                <img src='/images/car-img-2.png' alt='' />
                <div>
                  <h2 className='font-semibold text-lg'>Robert Fox</h2>
                  <p className='text-sm'>Telegram</p>
                  <img className='lg:hidden mt-3' src='/svg/stars.svg' alt='' />
                </div>
              </div>

              <img className='hidden' src='/svg/stars.svg' alt='' />
            </div>

            <p className='lg:text-3xl text-xl lg:font-semibold'>
              I&apos;ve tested numerous token, but this one is leaps and bounds
              ahead of the competition. It&apos;s phenomenal.
            </p>
          </div>
        </div>

        <div className='absolute left-5 right-5 lg:top-1/2 max-lg:-bottom-16 flex lg:-translate-y-1/2 transform justify-between'>
          <a
            href='#slide3'
            className='bg-white flex item-center justify-center size-10 pt-2 rounded-full'>
            ❮
          </a>
          <a
            href='#slide2'
            className='bg-white flex item-center justify-center size-10 pt-2 rounded-full'>
            ❯
          </a>
        </div>
      </div>

      <div id='slide2' className='carousel-item relative w-full'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center px-8 lg:mx-20'>
          <div className='space-y-6 hidden lg:block'>
            <div className='flex items-center justify-between'>
              <div className='flex gap-4 items-center'>
                <img src='/images/car-img-1.png' alt='' />

                <div>
                  <h2 className='font-semibold text-lg'>David Liyan</h2>
                  <p className='text-sm'>Twitter</p>
                  <img className='lg:hidden mt-3' src='/svg/stars.svg' alt='' />
                </div>
              </div>

              <img className='hidden' src='/svg/stars.svg' alt='' />
            </div>

            <p className='lg:text-3xl text-xl lg:font-semibold'>
              I&apos;ve tested numerous token, but this one is leaps and bounds
              ahead of the competition. It&apos;s phenomenal.
            </p>
          </div>

          <div className='space-y-6'>
            <div className='flex items-center justify-between'>
              <div className='flex gap-4 items-center'>
                <img src='/images/car-img-2.png' alt='' />
                <div>
                  <h2 className='font-semibold text-lg'>Robert Fox</h2>
                  <p className='text-sm'>Telegram</p>
                  <img className='lg:hidden mt-3' src='/svg/stars.svg' alt='' />
                </div>
              </div>

              <img className='hidden' src='/svg/stars.svg' alt='' />
            </div>

            <p className='lg:text-3xl text-xl lg:font-semibold'>
              I&apos;ve tested numerous token, but this one is leaps and bounds
              ahead of the competition. It&apos;s phenomenal.
            </p>
          </div>
        </div>
        <div className='absolute left-5 right-5 lg:top-1/2 max-lg:-bottom-16 flex lg:-translate-y-1/2 transform justify-between'>
          <a
            href='#slide1'
            className='bg-white flex item-center justify-center size-10 pt-2 rounded-full'>
            ❮
          </a>
          <a
            href='#slide3'
            className='bg-white flex item-center justify-center size-10 pt-2 rounded-full'>
            ❯
          </a>
        </div>
      </div>

      <div id='slide3' className='carousel-item relative w-full'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center px-8 lg:mx-20'>
          <div className='space-y-6'>
            <div className='flex items-center justify-between'>
              <div className='flex gap-4 items-center'>
                <img src='/images/car-img-1.png' alt='' />

                <div>
                  <h2 className='font-semibold text-lg'>David Liyan</h2>
                  <p className='text-sm'>Twitter</p>
                  <img className='lg:hidden mt-3' src='/svg/stars.svg' alt='' />
                </div>
              </div>

              <img className='hidden' src='/svg/stars.svg' alt='' />
            </div>

            <p className='lg:text-3xl text-xl lg:font-semibold'>
              I&apos;ve tested numerous token, but this one is leaps and bounds
              ahead of the competition. It&apos;s phenomenal.
            </p>
          </div>

          <div className='space-y-6 hidden lg:block'>
            <div className='flex items-center justify-between'>
              <div className='flex gap-4 items-center'>
                <img src='/images/car-img-2.png' alt='' />
                <div>
                  <h2 className='font-semibold text-lg'>Robert Fox</h2>
                  <p className='text-sm'>Telegram</p>
                  <img className='lg:hidden mt-3' src='/svg/stars.svg' alt='' />
                </div>
              </div>

              <img className='hidden' src='/svg/stars.svg' alt='' />
            </div>

            <p className='lg:text-3xl text-xl lg:font-semibold'>
              I&apos;ve tested numerous token, but this one is leaps and bounds
              ahead of the competition. It&apos;s phenomenal.
            </p>
          </div>
        </div>
        <div className='absolute left-5 right-5 lg:top-1/2 max-lg:-bottom-16 flex lg:-translate-y-1/2 transform justify-between'>
          <a
            href='#slide2'
            className='bg-white flex item-center justify-center size-10 pt-2 rounded-full'>
            ❮
          </a>
          <a
            href='#slide1'
            className='bg-white flex item-center justify-center size-10 pt-2 rounded-full'>
            ❯
          </a>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
