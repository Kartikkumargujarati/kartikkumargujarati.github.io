import { graphql } from "gatsby"
import { string, shape, object } from "prop-types"

export const SkillType = {
  name: string,
  image: shape({
    childImageSharp: object.isRequired,
    publicURL: string.isRequired,
  }),
}

export const query = graphql`
  fragment SkillFragment on SkillsYaml {
    name
    image {
        childImageSharp {
          gatsbyImageData(
              width: 225
            )
        }
        publicURL
      }
  }
`
