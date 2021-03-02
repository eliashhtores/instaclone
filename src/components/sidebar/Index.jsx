import React from 'react'
import useUser from '../../hooks/use-user'
import User from './User'
import Suggestions from './Suggestions'

const Sidebar = () => {
    const { user: { userId, following, username, fullName } = {} } = useUser()
    return (
        <div className="p-4">
            <User username={username} fullName={fullName} />
            <Suggestions userId={userId} following={following} />
        </div>
    )
}

export default Sidebar
