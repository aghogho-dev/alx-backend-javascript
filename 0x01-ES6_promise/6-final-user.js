import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const [userSignupResult, photoUploadResult] = await Promise.allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName)
    ]);

    return userSignupResult.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : String(result.reason)
    }));
  } catch (error) {
    console.error(error);
    throw error;
  }
}