import userImg from '../../assets/icons8-male-user-100.png'

export default function AdvisorCard({ name, uni, role }) {
    return (
        <div className='advisor-card'>
            <div className="image-container">
                <img src={userImg} alt="user-img"></img>
            </div>
            <div className='name-container'>
                <h3>{name}</h3>
                <h5>{uni}</h5>
                <p>{role}</p>
            </div>
        </div>
    )
}
