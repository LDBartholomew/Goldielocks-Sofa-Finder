const remoteURL = "http://localhost:5002"

export const getColorById = (colorId) => {
  //                            
    return fetch(`${remoteURL}/colors/${colorId}?`)
    .then(res => res.json())
}

export const getAllColors = () => {
  return fetch(`${remoteURL}/colors`)
  .then(res => res.json())
}