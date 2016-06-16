import React, {PropTypes} from 'react'

const Profile = ({user}) => {

  console.log(user)

  return (
    <div className="columns userProfile">
      <div className="column is-one-third">
        <img className="image is-128x128" src={user.avatarUrl} />
      </div>
      <div className="column">
        <h2><b>{user.name}</b></h2>
        <hr/>
        <p>{user.bio}</p>
        <hr/>
        {
          !user.company ?
            null :
            <p>Works at: <b>{user.company}</b></p>
        }
        {!user.company ? null : <hr/>}
        <div>
          <a className="btn btn-primary" href={user.profileUlr}>
            <b>Go to Github profile</b>
          </a>
        </div>
      </div>
    </div>
  )
}

Profile.PropTypes = {
  user: PropTypes.object.isRequired
}

export default Profile
