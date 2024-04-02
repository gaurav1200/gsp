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
          I am a Spring Boot Developer with 2 years of experience at Mavenir
          Systems Pvt Ltd, specializing in developing and maintaining
          applications for a Telcom project. My expertise includes developing
          RESTful web services using Spring Boot, JDBC, and Spring Security, as
          well as front-end development using ReactJs. I am skilled in working
          with databases like MySQL, CouchBase, and MongoDB, and I have
          experience in deploying applications using Docker and Kubernetes.
        </li>
        <li className="mb-2 ">
          I am proficient in version control systems like Git and have hands-on
          experience with CI/CD pipelines using Jenkins. I am well-versed in
          Agile methodologies like Scrum and have effectively utilized tools
          like JIRA and Confluence for project
          {/* management. Additionally, I have experience with monitoring tools
              such as Prometheus and Grafana, as well as various log management
              tools. */}
        </li>
        <li className="mb-2">
          Furthermore, I have expertise in testing frameworks like Junit and
          Mockito, and I have used code quality tools like SonarQube. I am
          experienced in build tools like Maven, and I am proficient in using
          IDEs like VS Code, STS and IntelliJ IDEA.
        </li>
        <li>
          In addition to my technical skills, I have a strong background in
          troubleshooting and debugging, as well as a proven track record of
          teamwork and collaboration. My communication and interpersonal skills,
          coupled with my adaptability and flexibility, have allowed me to
          effectively contribute to project success.
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
