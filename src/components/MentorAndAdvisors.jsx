import { advisorsList } from "../Data"
import AdvisorCard from "./cards/AdvisorCard"

export default function MentorAndAdvisors() {
    return (
        <div className="advisor-container"> 
            {
                advisorsList.map((advisor) => <AdvisorCard key={advisor.id} name={advisor.name} role={advisor.role} uni={advisor.uni}></AdvisorCard>)
            }
        </div>
    )
}
