import { bool } from "prop-types"
import React from "react"
import { ProfileType } from "../../types"

const Footer = ({ name, showThemeLogo = true }) => (
  <footer className="bg-front mt-16 pt-8 pb-16">
    <div className="flex justify-center md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex items-center">
      <div className="sm:text-sm text-xs  text-back-light font-header text-center">
        <b>
          &copy; {new Date().getFullYear()} {name}.
        </b>{" "}
        All rights reserved.
      </div>
    </div>
    <div className="text-back-light font-header text-xs text-center">
      <br />
        Theme
        <b>
          <a href="https://weeby.studio/intro"> Intro</a>
        </b>{" "}
      </div>
  </footer>
)

Footer.propTypes = {
  name: ProfileType.name,
  showThemeLogo: bool,
}

export default Footer
