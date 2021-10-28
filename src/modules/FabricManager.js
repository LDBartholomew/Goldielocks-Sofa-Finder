const remoteURL = "http://localhost:5002"

export const getFabricById = (fabricId) => {
  //                            
    return fetch(`${remoteURL}/fabrics/${fabricId}?`)
    .then(res => res.json())
}

export const getAllFabrics = () => {
  return fetch(`${remoteURL}/fabrics`)
  .then(res => res.json())
}