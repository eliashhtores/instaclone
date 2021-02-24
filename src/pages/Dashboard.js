import React, { useEffect } from 'react'
import Header from '../components/Header.jsx'
import Timeline from '../components/Timeline.jsx'
import Sidebar from '../components/sidebar/Index'

const Dashboard = () => {
    useEffect(() => {
        document.title = 'Instaclone'
    }, [])

    return (
        <div className="bg-gray-200">
            <Header />
            <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
                <Timeline />
                <Sidebar />
            </div>
        </div>
    )
}

export default Dashboard
