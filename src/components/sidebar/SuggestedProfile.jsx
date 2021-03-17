import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { updateLoggedInUserFollowing, updateFollowedUserFollowers } from '../../services/firebase'

const SuggestedProfile = ({ spDocId, username, profileId, userId, loggedInUserDocId }) => {
    const [followed, setFollowed] = useState(false)

    async function handleFollowUser() {
        setFollowed(true)

        await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false)
        await updateFollowedUserFollowers(spDocId, userId, false)
    }

    return !followed ? (
        <div className='flex flex-row align-items justify-between'>
            <div className='flex items-center justify-between'>
                <img src={`/images/avatars/${username}.jpg`} className='rounded-full w-8 flex mr-3' />
                <Link to={`/p/${username}`}>
                    <p className='font-bold text-sm'>{username}</p>
                </Link>
            </div>
            <div>
                <button className="text-xs font-bold text-blue-500" type='button' onClick={handleFollowUser}>
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
    spDocId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profileId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    loggedInUserDocId: PropTypes.string.isRequired,
}