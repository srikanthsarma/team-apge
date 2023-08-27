import { mentorList } from "../Data"
import MentorCard from "./cards/MentorCard"

export default function MeetYourMentor() {
    return (
        <div className="mentor-container">  
            {
                mentorList.map((mentor) => <MentorCard key={mentor.id} name={mentor.name} uniName={mentor.uniName}></MentorCard>)
            }
        </div>
    )
}
