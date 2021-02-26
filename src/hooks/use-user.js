import { useState, useEffect, useContext } from 'react'
import { getUserByUserId } from '../services/firebase'
import UserContext from '../context/user'

const useUser = () => {
    const [activeUser, setActiveUser] = useState({})
    const { user } = useContext(UserContext)

    useEffect(() => {
        async function getUserObjByUserId() {
            const [response] = await getUserByUserId(user.uid)
            setActiveUser({ ...response })
        }
        if (user && user.id) {
            getUserObjByUserId()
        }
    }, [user])
    return { user: activeUser }
}

export default useUser