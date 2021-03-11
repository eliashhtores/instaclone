import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SuggestedProfile = ({ userDocId, username, profileId, userId }) => {
    const [followed, setFollowed] = useState(false)

    return !followed ? (
        <div className='flex flex-row align-items justify-between'>
            <div className='flex items-center justify-between'>
                <img src={`/images/avatars/${username}.jpg`} className='rounded-full w-8 flex mr-3' />
                <Link to={`/p/${username}`}>
                    <p className='font-bold text-sm'>{username}</p>
                </Link>
            </div>
            <div>
                <button className='text-xs font-bold text-blue-medium' type='button' onClick={() => console.log(`Follow ${username}`)}>
                    Follow
                </button>
            </div>
        </div>
    )
        : (
            <div></div>
        )
}

export default SuggestedProfile

SuggestedProfile.propTypes = {
    userDocId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profileId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
}