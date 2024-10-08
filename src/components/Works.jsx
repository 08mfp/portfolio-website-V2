import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, web2 } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ProjectCard = ({ index, name, description, longDescription, tags, image, images = [], source_code_link, live_demo_link }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
       <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="w-full"
      >
        <div className="bg-tertiary p-5 rounded-2xl relative">
          <div className='flex justify-between mb-3'>
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className='bg-black text-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(live_demo_link, "_blank");
              }}
              className='bg-black text-white w-28 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src= {web2}
                alt='live demo'
                className='w-5 h-5 object-contain mr-2'
              />
              <span className="text-white">Demo</span>
            </button>

            <button
              onClick={handleToggleModal}
              className='bg-black text-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <span className='text-lg text-green-500'>+</span>
            </button>
          </div>

          <img
            src={image}
            alt='project_image'
            className={`w-full h-[230px] object-cover rounded-2xl ${!isModalOpen ? 'border-4 border-white' : ''}`}
          />

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>
        </div>
      </motion.div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className='bg-tertiary p-8 rounded-lg max-w-2xl w-full relative'>
            <button
              onClick={handleToggleModal}
              className='absolute top-3 right-3 bg-black text-white w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'
            >
              <span className='text-lg text-red-500'>×</span>
            </button>
            <div className='flex justify-center items-center flex-col'>
              {images.length > 0 && (
                <div className='relative w-full h-[230px] flex items-center justify-center'>
                  <img
                    src={images[currentImageIndex]}
                    alt={`project_image_${currentImageIndex}`}
                    className='w-full h-full object-cover rounded-2xl'
                  />
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className='absolute left-3 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-30'
                      >
                        {"<"}
                      </button>
                      <button
                        onClick={handleNextImage}
                        className='absolute right-3 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-30'
                      >
                        {">"}
                      </button>
                    </>
                  )}
                </div>
              )}
              <h3 className='text-white text-[24px] font-bold text-center mb-4 mt-5'>{name}</h3>
              <ul className='text-secondary text-[14px] list-disc list-inside'>
                {longDescription.map((bullet, idx) => (
                  <li key={idx} className='mb-2'>{bullet}</li>
                ))}
              </ul>
              <div className='mt-4 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                  <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                    #{tag.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="pt-5">
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects: </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I have worked on numerous projects ranging from web development to database applications.
          <br /><br />
          You can read more about some of my projects below; however, the full list of projects can be found on my LinkedIn profile or on Github.
        </motion.p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-10'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");