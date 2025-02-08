import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] items-center justify-evenly  flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="tex-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn(",", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]"
      >
        <li className=" mb-2">
          Accomplished professional with <b>over 3 years of experience</b> in
          Software Development, targeting opportunities as a Backend Developer
          across PAN- India. My results-driven and quality-minded approach,
          coupled with a proven ability to quickly master new tools and
          technologies, reflects my genuine interest in gaining and sharing
          knowledge.
        </li>
        <li className=" mb-2">
          <b>Extensive knowledge of the Software Development Lifecycle</b> right
          from requirement analysis, documentation (functional specifications,
          technical design), coding, and testing (preparation of test cases
          along with implementation) to the maintenance of proposed
          applications.
        </li>
        <li className=" mb-2">
          <b>
            Effective in developing solutions for given technical
            specifications;
          </b>{" "}
          installing application software & deploying customizations;
          contributing to code reviews.
        </li>
        <li className=" mb-2">
          <b>
            Excellence in evaluating end-user requirements and troubleshooting
          </b>{" "}
          for complex problems, analysing bug patterns, and providing insights
          and practices to the development team for the prevention of
          high-priority/severity bugs.
        </li>
        <li className=" mb-2">
          <b>Knowledge in manual and API testing,</b> with a keen eye for
          identifying defects and ensuring software quality.
        </li>
        <li className=" mb-2">
          <b>Proficient in collaborating with cross-functional teams</b>{" "}
          including designers, product managers, and other developers to create
          high quality products, ensuring alignment with project requirements
          and objectives.
        </li>
        <li className=" mb-2">
          Gaining practical experience in b
          <b>
            Java, Advanced Java, HTML, CSS, JavaScript, MySQL, MongoDB, Node.js,
            and React.
          </b>
        </li>
        <li className=" mb-2">
          Skilled in developing ideas for new programs, products, or features by
          monitoring industry developments and trends.
        </li>
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
