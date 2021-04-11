import React from "react"
import Location from "./location"
import ProfileImage from "./profile-image"
import { arrayOf, shape, ProfileType, SocialType } from "../../types"
import SocialLinks from "../social-links/social-links"

const Sidebar = ({ profile, social }) => (
  <aside className="w-full lg:w-1/3 lg:border-r border-line lg:px-6 xl:px-12">
    <div className="flex flex-col h-full justify-between">
      <div>
        <h1 className="font-header font-black text-front text-5xl leading-none break-words mb-6 text-center">
          {profile.name}
        </h1>
        {profile.image && (
          <ProfileImage image={profile.image} name={profile.name} />
        )}
        <br />
        <h4 className="font-text text-lg text-center">
          Tech Enthusiast | Achiever | Restorative | Learner | Analytical
        </h4>
        <div className="flex justify-center inline-block">
        {profile.location && (
          <Location
            location={profile.location}
            relocation={profile.relocation}
          />
        )}
        </div>
        <br />
        <div className="flex justify-center inline-block ">
          <br />
          <SocialLinks social={social} />
      </div>
      </div>
    </div>
  </aside>
)

Sidebar.propTypes = {
  profile: shape(ProfileType),
  social: arrayOf(shape(SocialType)),
}

export default Sidebar
