const remoteURL = "http://localhost:5002"

export const getConfigurationById = (configurationId) => {

  return fetch(`${remoteURL}/configurations/${configurationId}?`)
  .then(res => res.json())
}

export const getAllConfigurations = () => {
  return fetch(`${remoteURL}/configurations`)
  .then(res => res.json())
}