import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const results = await Promise.all(promises);
  const response = results.map((result) => {
    const status = result.status;
    const value = status === 'fulfilled' ? result.value : String(result.reason);
    return {
      status,
      value,
    };
  });
  return Promise.resolve(response);
}
