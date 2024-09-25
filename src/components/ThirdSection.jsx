import Carousel from './Carousel';

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

      <Carousel />
    </div>
  );
};

export default ThirdSection;
