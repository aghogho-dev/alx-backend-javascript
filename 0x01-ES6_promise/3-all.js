import { uploadPhoto, createUser } from "./utils";

export default async function handleProfileSignup() {
  const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);

  if (!photo || !user) {
    console.log("Signup system offline");
  } else {
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  }
}
