import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import auth from "./firebase"
async function userSignUp(email, password, name) {
  await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
    .then(() => console.log("created"))
    .catch(error => {
      alert(error.message)
    })
  await updateProfile(auth.currentUser, {
    displayName: name,
  })
    .then(
      () => (
        console.log("updated")
      )
    )
    .catch(error => {
      alert(error.message)
    })
  return true
}
async function userSignIn(email, password) {
  await signInWithEmailAndPassword(
    auth,
    email,
    password
  )
  return true
}
export async function userLogOut() {
  await signOut(auth).then(()=>{
console.log("triggered")
}
);
  return true;
}


export { userSignIn, userSignUp}
