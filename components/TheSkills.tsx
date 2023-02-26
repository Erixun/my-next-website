import BaseSkillCard from "./BaseSkillCard";
import topSkills from "../assets/skills.top.json";

const TheSkills = () => {
  return (
    <section id="Skills" className="main-section powers stand-out">
      <div className="lg-container">
        <header>
          <h2>Technical Skills</h2>
          <h3>(Relative Proficiencies)</h3>
        </header>
        <ul
          v-if="skills.length > 0"
          className="skill-cards"
          role="presentation"
        >
          {topSkills.map((skill, index) => (
            <BaseSkillCard key={index} data={skill} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TheSkills;
