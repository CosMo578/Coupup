const Accordin = () => {
  return (
    <div className='space-y-6 text-black'>
      <div className='gradient_bg collapse lg:rounded-[4rem] p-5 lg:px-8 px-2 rounded-3xl collapse-arrow bg-base-200'>
        <input type='radio' name='my-accordion-2' defaultChecked />
        <div className='collapse-title text-xl font-medium'>
          How are auctions structured on the platform?
        </div>
        <div className='collapse-content'>
          <p>
            Our auctions are typically open to all registered users.
            Participants place bids on items, and the highest bidder at the end
            of the auction period wins the item.
          </p>
        </div>
      </div>

      <div className='gradient_bg collapse lg:rounded-[4rem] p-5 lg:px-8 px-2 rounded-3xl collapse-arrow bg-base-200'>
        <input type='radio' name='my-accordion-2' />
        <div className='collapse-title text-xl font-medium'>
          How is the auction winner determined and notified
        </div>
        <div className='collapse-content'>
          <p>
            In the event of a tie, we may use a random number generator or other
            fair method to determine the winner.
          </p>
        </div>
      </div>

      <div className='gradient_bg collapse lg:rounded-[4rem] p-5 lg:px-8 px-2 rounded-3xl collapse-arrow bg-base-200'>
        <input type='radio' name='my-accordion-2' />
        <div className='collapse-title text-xl font-medium'>
          How can users acquire copup token
        </div>
        <div className='collapse-content'>
          <p>
            You may be able to cancel your bid, but this depends on the auctions
            terms and conditions. Please check the specific auction details for
            information.
          </p>
        </div>
      </div>

      <div className='gradient_bg collapse lg:rounded-[4rem] p-5 lg:px-8 px-2 rounded-3xl collapse-arrow bg-base-200'>
        <input type='radio' name='my-accordion-2' />
        <div className='collapse-title text-xl font-medium'>
          How are user profiles and wallet managed within the platform
        </div>
        <div className='collapse-content'>
          <p>
            You may be able to cancel your bid, but this depends on the auctions
            terms and conditions. Please check the specific auction details for
            information.
          </p>
        </div>
      </div>

      <div className='gradient_bg collapse lg:rounded-[4rem] p-5 lg:px-8 px-2 rounded-3xl collapse-arrow bg-base-200'>
        <input type='radio' name='my-accordion-2' />
        <div className='collapse-title text-xl font-medium'>
          Are there any plans for future features
        </div>
        <div className='collapse-content'>
          <p>
            You may be able to cancel your bid, but this depends on the auctions
            terms and conditions. Please check the specific auction details for
            information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordin;
