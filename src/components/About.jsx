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
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me :</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus porta mi quis feugiat faucibus. 
        Vestibulum eget efficitur massa, efficitur efficitur mauris. 
        Fusce condimentum euismod fermentum. 
        Nunc lacinia enim mattis leo luctus vehicula. 
        Sed tempor tempor orci eu malesuada. 
        Sed pellentesque aliquam luctus. 
        Aenean convallis massa sit amet nibh tristique fringilla.
        Maecenas sit amet diam augue. Nullam et lobortis ligula. 
        </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");