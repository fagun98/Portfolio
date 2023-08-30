import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from '../hoc'


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className='xs:w-[250px] w-full'
    >

      <motion.div
        variants={ fadeIn("right","spring",index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' 
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img 
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3
            className="text-white text-[20px] font-bold text-center"
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary xs:text=[12px] text-[17px] max-w-3xl leading-[30px]' 
      >
      
      I'm <span className='font-semibold text-white'> Fagun Raithatha</span>, a tech-driven individual with a solid foundation in Computer Engineering and an inquisitive mind shaped by a Master's degree in Computer Science from Purdue University.
      <br /><br />
      <span className="sm:block hidden"> 
        <span className='font-semibold text-white'>🎓 Education That Ignites Innovation:</span>
        <br /><br />
        My journey began with a Bachelor's degree in Computer Engineering, where I cultivated a deep understanding of the building blocks of modern technology. This solid groundwork empowered me to pursue my passion further and attain a Master's degree from Purdue, a world-renowned institution, specializing in Computer Science. This academic pursuit ignited my curiosity and honed my skills in software development.
        <br/><br />
        <span className='font-semibold text-white'>💡 Innovative Problem Solver:</span>
        <br/><br />
        With each academic endeavor, I've grown as an adaptable and innovative problem solver. I thrive on challenges that require creative thinking and strategic approaches. My portfolio reflects a collection of projects where I've harnessed technology to conquer complex problems and deliver practical solutions.
        <br/><br />
        <span className='font-semibold text-white'>🛠️ Crafting Solutions through Code:</span>
        <br /><br />
        Software development is my canvas, where I paint solutions that bridge gaps and enhance efficiency. I've meticulously crafted applications, algorithms, and systems that not only meet technical specifications but also exceed expectations. My journey in coding has been marked by continuous learning and a commitment to staying current with emerging technologies.
        <br/><br />
        <span className='font-semibold text-white'>🌐 A Vision for Tech's Potential:</span>
        <br/><br />
        In an ever-evolving digital landscape, I envision a world where technology solves real-world problems and inspires transformation. From optimizing user experiences to driving data-driven decisions, I'm dedicated to contributing to this vision. My portfolio stands as a testament to this commitment, showcasing my dedication to leveraging technology for positive change.
        <br/><br />
        <span className='font-semibold text-white'>🤝 Collaboration and Beyond:</span>
        <br /><br />
        Collaboration is at the heart of progress. I am excited to connect with like-minded professionals, potential collaborators, and visionaries who share a passion for driving innovation. Let's explore opportunities to combine our strengths and push the boundaries of what's possible in the realm of technology.
        <br/><br />
        <span className='font-semibold text-white'>🔗 Let's Connect:</span>
        <br /><br />
        Thank you for visiting my portfolio. Feel free to reach out if you're interested in exploring potential collaborations, discussing exciting tech trends, or simply exchanging insights. Together, we can shape the future of tech and make a lasting impact.
        <br /><br />
      </span>
      #Portfolio #TechInnovation #SoftwareSolutions #Collaboration


      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>  
  )
}

export default SectionWrapper(About,"about")