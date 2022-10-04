import './Profile.css';
import LikesForm from './LikesForm';

const Profile = (props) => {
  return (
    <div className="profile">
      <img className="profile--img" src={props.profile.img}/>
      <h3>{props.profile.title}</h3>
      <h3>{props.profile.name}</h3>
      <LikesForm/>
    </div>
  )
}

export default Profile;