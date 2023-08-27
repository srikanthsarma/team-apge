import Hero from "./components/Hero";
import MeetYourMentor from "./components/MeetYourMentor";
import MentorAndAdvisors from "./components/MentorAndAdvisors";
import Universities from "./components/Universities";


export default function App() {

  return (
    <>
      <section className="hero-container">
        <Hero></Hero>
      </section>

      <section className="uni-container">
        <Universities></Universities>
      </section>

      <section className="mentors-container">
        <h1>Meet Your Mentor</h1>
        <MeetYourMentor></MeetYourMentor>
      </section>

      <section className="advisors-container">
        <h1>Mentors and Advisors</h1>
        <MentorAndAdvisors></MentorAndAdvisors>
      </section>
    </>
  )
}


