import React from 'react'
import useUser from '../../hooks/use-user'
import User from './User'
import Suggestions from './Suggestions'

const Sidebar = () => {
    const { user: { docId, userId, following, username, fullName } = {} } = useUser()
    return (
        <div className="p-4">
            <User username={username} fullName={fullName} />
            <Suggestions userId={userId} />
        </div>
    )
}

export default Sidebar
