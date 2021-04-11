import React from "react"
import About from "../about/about"
import Skills from "../skills/skills"
import WorkHistory from "../work-history/work-history"

const MainContent = ({ formspreeEndpoint, history, projects, profile, skills }) => {
  return (
    <main className="lg:w-2/3 lg:pl-8 xl:pl-12">

      {profile.about && <About about={profile.about} />}
      {/* {profile.skills && <Skills skills={profile.skills} />} */}
      <Skills skills={skills} />
      <WorkHistory history={history} />

    </main>
  )
}

export default MainContent
