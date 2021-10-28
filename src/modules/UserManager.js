const remoteURL = "http://localhost:5002";

export const getUserById = (userId) => {
  return fetch(`${remoteURL}/users/${userId}?`).then((res) => res.json());
};

export const getAllUsers = () => {
  return fetch(`${remoteURL}/users`).then((res) => res.json());
};
