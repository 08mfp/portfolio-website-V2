import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' >
      <div options={{ max: 45, scale: 1, speed: 450, }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} lt='web-development'  className=' w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="pt-5" >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me :</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Hi There! I am a final-year Computer Science student, graduating in July 2025.
        I am looking for Software Engineering graduate roles. 
        I am experienced in Front & Back-end development, 
        with professional experience as a software engineer intern at The Times.
        I have created this website to showcase some of my skills, projects and experiences.
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