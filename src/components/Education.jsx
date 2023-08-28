import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { educations } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({education}) => (


  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={education.date}
    iconStyle={{background: education.iconBg}}
    icon = {
      <div className="flex justify-center items-center w-full h-full">
        <img 
          src={ education.icon }
          alt={ education.school }
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold"><span className="text-[16px] font-semibold">{education.degree} in </span>{education.major}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin:0 }}>{education.school}</p>
      <p className="text-secondary text-[12px]" style={{ margin:0 }}>{education.gpa}</p>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {education.courses.map((course, index) => (
          <li 
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
              {course}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
)

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Academics so far</p>
        <h3 className={`${styles.sectionHeadText}`}>Education.</h3>
      </motion.div>

      <div className="mt-20 flex flex-col"> 
        <VerticalTimeline>
          { educations.map((education, index)=>(
            <EducationCard key={index} education={education}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Education,"education")