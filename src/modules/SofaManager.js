const remoteURL = "http://localhost:5002";

export const getAllSofas = () => {
  return fetch(`${remoteURL}/sofas`).then((res) => res.json());
};

export const getSofasByColorId = (categoryId) => {
  return fetch(`${remoteURL}/sofas/?colorId=${categoryId}`).then((res) =>
    res.json()
  );
};

export const getSofasByFabricId = (categoryId) => {
  return fetch(`${remoteURL}/sofas/?fabricId=${categoryId}`).then((res) =>
    res.json()
  );
};

export const getSofasByFirmnessId = (categoryId) => {
  return fetch(`${remoteURL}/sofas/?firmnessId=${categoryId}`).then((res) =>
    res.json()
  );
};
