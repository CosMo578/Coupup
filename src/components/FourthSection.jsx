import Accordin from './Accordin';

const FourthSection = () => {
  return (
    <section className='relative lg:px-32 px-8 py-10'>
      <div className='space-y-2 text-center mb-10'>
        <p className='gradient_text uppercase max-lg:text-sm font-bold'>
          Frequently Asked Questions
        </p>

        <h2 className='lg:text-4xl text-2xl font-bold'>
          Popular questions about <br /> Copup
        </h2>

        <p className='text-sm text-gray-text mx-auto max-lg:w-[70%] w-[38%]'>
          Discover the solutions to your Frequently asked questions, and
          understand how to leverage Copup to the maximum
        </p>
      </div>

      <Accordin/>
      
      {/* <div
        id='accordion-open'
        data-accordion='collapse'
        className='space-y-6'
        data-active-classes='gradient_bg text-black'
        data-inactive-classes='text-white'>
        <h2 id='accordion-open-heading-1'>
          <button
            type='button'
            className='flex items-center justify-between rounded-full w-full p-5 font-semibold lg:text-xl lg:pl-12 lg:rtl:text-right gap-3 text-left'
            data-accordion-target='#accordion-open-body-1'
            aria-expanded='true'
            aria-controls='accordion-open-body-1'>
            <span className='flex items-center'>
              How are auctions structured on the platform?
            </span>
            <div
              data-accordion-icon
              className='bg-white lg:p-4 p-1.5 flex items-center justify-center rounded-full'>
              <svg
                className='size-3 shrink-0'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 10 6'>
                <path
                  stroke='black'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5 5 1 1 5'
                />
              </svg>
            </div>
          </button>
        </h2>

        <div
          id='accordion-open-body-1'
          className='hidden gradient_bg rounded-[2rem] text-black lg:pl-12'
          aria-labelledby='accordion-open-heading-1'>
          <div className='p-5'>
            <p className='mb-2 '>
              Our auctions are typically open to all registered users.
              Participants place bids on items, and the highest bidder at the
              end of the auction period wins the item.
            </p>
          </div>
        </div>

        <h2 id='accordion-open-heading-2'>
          <button
            type='button'
            className='flex items-center justify-between rounded-full w-full p-5 font-semibold lg:text-xl lg:pl-12 lg:rtl:text-right gap-3 text-left'
            data-accordion-target='#accordion-open-body-2'
            aria-expanded='false'
            aria-controls='accordion-open-body-2'>
            <span className='flex items-center'>
              How is the auction winner determined and notified
            </span>
            <div
              data-accordion-icon
              className='bg-white lg:p-4 p-1.5 flex items-center justify-center rounded-full'>
              <svg
                className='size-3 shrink-0'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 10 6'>
                <path
                  stroke='black'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5 5 1 1 5'
                />
              </svg>
            </div>
          </button>
        </h2>

        <div
          id='accordion-open-body-2'
          className='hidden gradient_bg rounded-[2rem] text-black lg:pl-12'
          aria-labelledby='accordion-open-heading-2'>
          <div className='p-5'>
            <p className='mb-2'>
              In the event of a tie, we may use a random number generator or
              other fair method to determine the winner.
            </p>
          </div>
        </div>

        <h2 id='accordion-open-heading-3'>
          <button
            type='button'
            className='flex items-center justify-between rounded-full w-full p-5 font-semibold lg:text-xl lg:pl-12 lg:rtl:text-right gap-3 text-left'
            data-accordion-target='#accordion-open-body-3'
            aria-expanded='false'
            aria-controls='accordion-open-body-3'>
            <span className='flex items-center'>
              How can users acquire copup token
            </span>
            <div
              data-accordion-icon
              className='bg-white lg:p-4 p-1.5 flex items-center justify-center rounded-full'>
              <svg
                className='size-3 shrink-0'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 10 6'>
                <path
                  stroke='black'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5 5 1 1 5'
                />
              </svg>
            </div>
          </button>
        </h2>

        <div
          id='accordion-open-body-3'
          className='hidden gradient_bg rounded-[2rem] text-black lg:pl-12'
          aria-labelledby='accordion-open-heading-3'>
          <div className='p-5'>
            You may be able to cancel your bid, but this depends on the auctions
            terms and conditions. Please check the specific auction details for
            information.
          </div>
        </div>

        <h2 id='accordion-open-heading-4'>
          <button
            type='button'
            className='flex items-center justify-between rounded-full w-full p-5 font-semibold lg:text-xl lg:pl-12 lg:rtl:text-right gap-3 text-left'
            data-accordion-target='#accordion-open-body-4'
            aria-expanded='false'
            aria-controls='accordion-open-body-4'>
            <span className='flex items-center'>
              How are user profiles and wallet managed within the platform
            </span>
            <div
              data-accordion-icon
              className='bg-white lg:p-4 p-1.5 flex items-center justify-center rounded-full'>
              <svg
                className='size-3 shrink-0'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 10 6'>
                <path
                  stroke='black'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5 5 1 1 5'
                />
              </svg>
            </div>
          </button>
        </h2>

        <div
          id='accordion-open-body-4'
          className='hidden gradient_bg rounded-[2rem] text-black lg:pl-12'
          aria-labelledby='accordion-open-heading-3'>
          <div className='p-5'>
            You may be able to cancel your bid, but this depends on the auctions
            terms and conditions. Please check the specific auction details for
            information.
          </div>
        </div>

        <h2 id='accordion-open-heading-5'>
          <button
            type='button'
            className='flex items-center justify-between rounded-full w-full p-5 font-semibold lg:text-xl lg:pl-12 lg:rtl:text-right gap-3 text-left'
            data-accordion-target='#accordion-open-body-5'
            aria-expanded='false'
            aria-controls='accordion-open-body-5'>
            <span className='flex items-center'>
              Are there any plans for future features
            </span>
            <div
              data-accordion-icon
              className='bg-white lg:p-4 p-1.5 flex items-center justify-center rounded-full'>
              <svg
                className='size-3 shrink-0'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 10 6'>
                <path
                  stroke='black'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5 5 1 1 5'
                />
              </svg>
            </div>
          </button>
        </h2>

        <div
          id='accordion-open-body-5'
          className='hidden gradient_bg rounded-[2rem] text-black lg:pl-12'
          aria-labelledby='accordion-open-heading-3'>
          <div className='p-5'>
            You may be able to cancel your bid, but this depends on the auctions
            terms and conditions. Please check the specific auction details for
            information.
          </div>
        </div>
      </div> */}

      <img
        className='absolute right-0 bottom-[5%] rotate-180'
        src='/svg/footer-gradient.svg'
        alt=''
      />
    </section>
  );
};

export default FourthSection;
