import React from "react"
import { number, string } from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"

import { arrayOf, shape, SkillType } from "../../types"


const Skill = ({ skill, image, i }) => (
  <li
    className={`relative flex justify-center items-center rounded-full border-2 border-skill-${i+1}`}
  >
    <GatsbyImage 
    image={image.childImageSharp.gatsbyImageData} 
    alt={skill} 
    className="w-fill rounded-full opacity-90" 
    />
    <span className="absolute font-header font-semibold  text-sm md:text-2xl px-2 text-center">
      {skill}
    </span>
  </li>
)

Skill.propTypes = {
  skill: SkillType.name,
  image: SkillType.image
}

export default Skill
