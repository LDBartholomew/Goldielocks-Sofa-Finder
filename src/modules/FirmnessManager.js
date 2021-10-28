const remoteURL = "http://localhost:5002"

export const getFirmnessById = (firmnessId) => {
  //                            
    return fetch(`${remoteURL}/firmnesses/${firmnessId}?`)
    .then(res => res.json())
}

export const getAllFirmnesses = () => {
  return fetch(`${remoteURL}/firmnesses`)
  .then(res => res.json())
}