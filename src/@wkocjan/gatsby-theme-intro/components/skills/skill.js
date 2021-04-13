import React from "react"
import { number, string } from "prop-types"
import SkillSvg from "./skill.svg"
import "./skill.css"

const Skill = ({ skill, i }) => (
  <li
    className={`relative flex justify-center items-center rounded-full border-solid border-2 skill-entry-${i}`}
  >
    <span className="absolute font-header font-semibold text-front text-sm md:text-2xl px-2 text-center">
      {skill}
    </span>
    <SkillSvg className={`w-full opacity-75 m-2 skill-entry-${i}`} />
  </li>
)

Skill.propTypes = {
  skill: string.isRequired,
  i: number.isRequired,
}

export default Skill
