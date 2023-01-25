import React from "react"
import { ProfileType } from "../../types"

const About = ({ about }) => (
  <>
    <br />
    <h5 className="font-header font-semibold text-front text-4xl mb-3">
      Hello there!
    </h5>
    <div className="font-text text-xl pb-12 leading-normal whitespace-pre-line">
      <p>I'm Kartik. I am a software engineer 👨‍💻 and a huge taco lover 🌮 ❤️</p>
      <br />
      <p>I currently work at <a class="underline" href="https://retailmenot.com">RetailMeNot, Inc</a> where I lead the native apps team (Android & iOS teams) and own the RetailMeNot's Federated GraphQL architecture.</p>
      <br />
      <p>I am passionate about building good software and always looking for ways to improve user experience. My technical interests include Mobile development, GraphQL, CI/CD, DevOps, and Machine learning. </p>
      <br />
      <p>Besides coding, I love to cook 👨‍🍳, watch movies 🍿🎥, some photography 📸, and hang out with family and friends.</p>
    </div>
  </>
)

About.propTypes = {
  about: ProfileType.about,
}

export default About
