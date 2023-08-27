import userImg from '../../assets/icons8-male-user-100.png'

function MentorCard({ name, uniName }) {
    return (
        <div className='mentor-card'>
            <div className="image-container">
                <img src={userImg} alt="user-img"></img>
            </div>
            <div className='name-container'>
                <h3>{name}</h3>
                <p>{uniName}</p>
            </div>
        </div>
    )
}

export default MentorCard