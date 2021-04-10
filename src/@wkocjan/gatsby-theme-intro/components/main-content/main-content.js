import React from "react"
import About from "../about/about"
import Skills from "../skills/skills"
import WorkHistory from "../work-history/work-history"

const MainContent = ({ formspreeEndpoint, history, projects, profile }) => {
  return (
    <main className="lg:w-2/3 lg:pl-8 xl:pl-12">

    {profile.about && <About about={profile.about} />}

      <div className="flex flex-wrap">
        <div className="md:w-3/4 pb-12 md:pr-8 lg:pr-12 xl:pr-20">
          {profile.skills && <Skills skills={profile.skills} />}
        </div>
        
      </div>

      <WorkHistory history={history} />
      
    </main>
  )
}

export default MainContent
