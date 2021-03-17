import {
    FieldValue,
    firebase
} from '../lib/firebase'

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

export async function getSuggestedProfiles(userId, following) {
    const result = await firebase
        .firestore()
        .collection('users')
        .limit(10)
        .get()

    return result.docs
        .map((user) => ({
            ...user.data(),
            docId: user.id
        }))
        .filter((profile) => profile.userId !== userId && !following.includes(profile.userId))
}

// updateFollowedUserFollowers
export async function updateLoggedInUserFollowing(
    loggedInUserDocId, // Currently logged in user docId
    profileId, // The user that I want to follow
    isFollowingProfile // True/False (Am I currently following this user?)
) {

    return firebase.firestore().collection('users').doc(loggedInUserDocId).update({
        following: isFollowingProfile
            ? FieldValue.arrayRemove(profileId)
            : FieldValue.arrayUnion(profileId)
    })
}

export async function updateFollowedUserFollowers(
    spDocId, // Suggested Profile docId
    userId, // Currently logged in userId
    isFollowingProfile // True/False (Am I currently following this user?)
) {

    return firebase.firestore().collection('users').doc(spDocId).update({
        followers: isFollowingProfile
            ? FieldValue.arrayRemove(userId)
            : FieldValue.arrayUnion(userId)
    })
}