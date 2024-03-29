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
        Spring boot Developer with 2 years of experience in Mavenir Systems Pvt
        Ltd, I have worked on Telcom project and have gained experience in
        developing and maintaining the application. I have experience in
        developing RESTful web services using Spring Boot, Spring Data JPA, and
        Spring Security. I have also worked on developing and maintaining the
        front end using ReactJs. I have experience in working with databases
        like MySQL, CouchBase and MongoDB. I have also worked on developing and
        maintaining the applications using Docker and Kubernetes. I have
        experience in working with version control systems like Git and have
        experience in working with CI/CD pipelines using Jenkins.
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
