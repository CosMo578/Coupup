const SecondSection = () => {
  return (
    <section className='section_padding lg:py-32 gradient_bg_2 relative grid lg:grid-cols-2 gap-16'>
      <div>
        <img
          className='max-lg:mx-auto'
          src='/images/security.png'
          alt='security'
        />
      </div>

      <div className='space-y-6'>
        <p className='uppercase font-medium'>Features</p>
        <h2 className='lg:text-5xl text-3xl font-semibold'>
          Copup spreads <br /> Trust everywhere
        </h2>
        <p>
          Our team has created blockchain solutions for over 400 companies, and
          we are still growing. From less paperwork and fewer disputes, to
          happier customers and entirely new business methods, a shared record
          of truth is invaluable.
        </p>
        <div className='flex items-center gap-[20%]'>
          <div>
            <h2 className='gradient_header lg:text-5xl text-3xl font-semibold'>
              63M
            </h2>
            <p>Copup users</p>
          </div>

          <div>
            <h2 className='gradient_header lg:text-5xl text-3xl font-semibold'>
              48%
            </h2>
            <p>Ecosystem Fund</p>
          </div>
        </div>
      </div>

      <img
        className='absolute left-0 lg:bottom-0 max-lg:top-[40%] opacity-45'
        src='/svg/sec2-ellipse.svg'
        alt=''
      />
      <img
        className='absolute right-0 lg:bottom-[20%] max-lg:bottom-[6%] opacity-45'
        src='/svg/sec2-ellipse-2.svg'
        alt=''
      />
    </section>
  );
};

export default SecondSection;
