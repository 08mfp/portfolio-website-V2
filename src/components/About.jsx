import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, points }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {isExpanded && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
          <div className='relative bg-tertiary rounded-[20px] p-8 w-full max-w-lg z-50'>
            <button
              onClick={handleToggleExpand}
              className='absolute top-3 right-3 bg-black text-white w-8 h-8 rounded-full flex justify-center items-center cursor-pointer z-10'
            >
              <span className='text-lg text-red-500'>×</span>
            </button>
            <div className='flex justify-center items-center flex-col'>
              <img src={icon} alt='service-icon' className='w-16 h-16 object-contain mb-4' />
              <h3 className='text-white text-[24px] font-bold text-center mb-4'>{title}</h3>
              <ul className='list-disc pl-5 space-y-2'>
                {points.map((point, index) => (
                  <li key={`point-${index}`} className='text-secondary text-[14px]'>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='xs:w-[250px] w-full'
      >
        <Tilt
          className='w-full'
          options={{ max: isExpanded ? 0 : 45, scale: 1, speed: 450 }}
        >
          <div className='relative bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt='service-icon' className='w-16 h-16 object-contain' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

            <button
              onClick={handleToggleExpand}
              className='absolute top-3 right-3 bg-black text-white w-8 h-8 rounded-full flex justify-center items-center cursor-pointer z-10'
            >
              <span className={`text-lg ${isExpanded ? 'text-red-500' : 'text-green-500'}`}>
                {isExpanded ? "×" : "+"}
              </span>
            </button>
          </div>
        </Tilt>
      </motion.div>
    </>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="pt-5" >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me :</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Hi There! I am a final-year Computer Science student, graduating in July 2025.
        <br/>
        I am looking for Software Engineering graduate roles, and I have created this website to showcase some of my skills, projects and experiences.
        </motion.p>

      <div className="w-full flex row sm:flex-row gap-4 mt-6">
        <a
          href="https://github.com/08mfp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center text-white bg-[#915EFF] px-4 py-2 rounded-full shadow-md hover:bg-purple-700 transition-colors duration-300 w-56 sm:w-auto"
        >
          <img
            src="https://www.svgrepo.com/show/312259/github.svg"
            alt="GitHub Logo"
            className="w-5 h-5 mr-2"
          />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mohamedfaridpatel/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center text-white bg-[#915EFF] px-4 py-2 rounded-full shadow-md hover:bg-purple-700 transition-colors duration-300 w-56 sm:w-auto"
        >
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png"
            alt="LinkedIn Logo"
            className="w-5 h-5 mr-2"
          />
          LinkedIn
        </a>
        <a
          href="https://react-portfolio-tau-ten-62.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center text-white bg-[#915EFF] px-4 py-2 rounded-full shadow-md hover:bg-purple-700 transition-colors duration-300 w-56 sm:w-auto"
        >
          <img
            src="https://www.freeiconspng.com/thumbs/website-icon/website-icon-11.png"
            alt="Web Logo"
            className="w-5 h-5 mr-2"
          />
          Old Website
        </a>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
