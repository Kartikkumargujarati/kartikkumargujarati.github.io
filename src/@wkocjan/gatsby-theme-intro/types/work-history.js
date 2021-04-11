import { graphql } from "gatsby"
import { string } from "prop-types"

export const WorkHistoryType = {
  company: string.isRequired,
  period: string,
  position: string,
  url: string,
  desc: string,
}

export const query = graphql`
  fragment CustomWorkHistoryFragment on WorkHistoryYaml {
    company
    period
    position
    url
    desc
  }
`
