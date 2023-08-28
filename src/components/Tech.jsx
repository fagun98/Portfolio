import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";
import { frontend_technologies, backend_technologies, devops_tecnhnologies, database_technologies } from "../constants";
import { motion } from "framer-motion";

import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionHeadText}`}>Technologies.</h3>
      </motion.div>

      <motion.p className={`${styles.sectionSubText} mx-15 mt-10 font-semibold`}>Frontend</motion.p>
      <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
          {frontend_technologies.map((technology) => (
            <div 
              className="w-28 h-28" 
              key={technology.name}
            >
              <BallCanvas icon={ technology.icon } />
            </div>

          ))}
      </div>

      <motion.p className={`${styles.sectionSubText} mx-15 mt-10 font-semibold`}>Backend</motion.p>
      <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
          {backend_technologies.map((technology) => (
            <div 
              className="w-28 h-28" 
              key={technology.name}
            >
              <BallCanvas icon={ technology.icon } />
            </div>

          ))}
      </div>
      {/*
      <motion.p className={`${styles.sectionSubText} mx-15 mt-10 font-semibold`}>Database</motion.p>
      <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
          {database_technologies.map((technology) => (
            <div 
              className="w-28 h-28" 
              key={technology.name}
            >
              <BallCanvas icon={ technology.icon } />
            </div>

          ))}
      </div>

      <motion.p className={`${styles.sectionSubText} mx-15 mt-10 font-semibold`}>DevOps</motion.p>
      <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
          {devops_tecnhnologies.map((technology) => (
            <div 
              className="w-28 h-28" 
              key={technology.name}
            >
              <BallCanvas icon={ technology.icon } />
            </div>

          ))}
        
      </div>
      */}
    </>
          
  )
}

export default SectionWrapper(Tech,"");