// Remove the User type import since we're converting to JavaScript
const USER_STORAGE_KEY = 'auth_user';

export function getStoredUser() {
  const user = localStorage.getItem('auth_user');
  if (!user) {
    return null;
  }
  try {
    return JSON.parse(user);
  } catch (error) {
    console.error('Error parsing stored user data:', error);
    return null;
  }
}

export function setStoredUser(user) {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
}

export function removeStoredUser() {
  localStorage.removeItem(USER_STORAGE_KEY);
}