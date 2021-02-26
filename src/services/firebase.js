import { firebase } from '../lib/firebase'

const doesUsernameExist = async (username) => {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', username)
        .get()

    return result.docs.map((user) => user.data().length > 0)
}

export default doesUsernameExist

export async function getUserByUserId(userId) {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('userId', '==', userId)
        .get()

    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }))

    return user
}