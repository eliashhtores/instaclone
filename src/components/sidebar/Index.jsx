import React from 'react'
import useUser from '../../hooks/use-user'

export default function Sidebar() {
    const { user: { docId } } = useUser()
    console.log(docId)
    return (<p>I am the sidebar</p>)
}