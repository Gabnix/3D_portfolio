import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Jim Ling</span>
        <br />
        Software Engineer · Perth, WA
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center mb-5'>
          Worked with companies and picked up skills along the way
        </p>

        <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 w-full'>
          <Link to='/about' className='neo-brutalism-white neo-btn flex-1'>
            Learn more
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
          </Link>
          <Link to='/contact' className='neo-brutalism-white neo-btn flex-1'>
            Contact me
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
          </Link>
        </div>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Need a project done or looking for a developer?
        </p>

        <Link to='/contact' className='neo-brutalism-white neo-btn mt-4'>
          Let's talk
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Want to know more about my work experience?
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn mt-4'>
          View experience
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
