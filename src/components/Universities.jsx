import { uniList } from "../Data"
import UniCard from "./cards/UniCard";

export default function Universities() {


    return (
        <>
            {
                uniList.map((uni) => <UniCard key={uni.id} name={uni.uniName}></UniCard>)
            }
        </>
    )
}
