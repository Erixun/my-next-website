import BaseSkillCard from "./BaseSkillCard";
import skills from "../assets/skills.json";

const TheSkills = () => {
  return (
    <section id="Powers" className="main-section powers stand-out">
      <div className="lg-container">
        <header>
          <h2>Technical Experience</h2>
          <h3>(Relative Proficiencies)</h3>
        </header>
        <ul
          v-if="skills.length > 0"
          className="skill-cards"
          role="presentation"
        >
          {skills.map((skill, index) => (
            <BaseSkillCard key={index} data={skill} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TheSkills;
