import BaseSkillCard from "./BaseSkillCard";
import skills from "../assets/skills.json";

const TheSkills = () => {
  const showMore = false;
  return (
    <section id="powers" className="main-section powers stand-out">
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
          {/* v-for="(skill, index) in skills"
      :key="skill.id"
      :data="skill"
      v-show="index < SKILLS_MINIMUM || showMore" */}
        </ul>
        <button className="btn-secondary skills-btn">
          {/* @click="toggleShowState()"> */}
          {showMore ? "Show Less.." : "Show More..."}
        </button>
      </div>
    </section>
  );
};

export default TheSkills;
