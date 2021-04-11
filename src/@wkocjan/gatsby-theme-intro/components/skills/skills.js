import React from "react"
import Skill from "./skill"
import { ProfileType } from "../../types"

const Skills = ({ skills }) => (
  <>
    <h5 className="flex flex-wrap font-header font-semibold text-front text-xl mb-3">
      Top skills
    </h5>
    <div className="flex justify-center inline-block">
      <div className="md:w-2/3 pb-12">
        <ul className="flex flex-wrap grid grid-cols-3 gap-2 md:gap-4">
          {skills.map((skill, i) => (
            <Skill skill={skill} key={skill} i={i + 1} />
          ))}
        </ul>
      </div>
    </div>
  </>
)

Skills.propTypes = {
  skills: ProfileType.skills,
}

export default Skills
