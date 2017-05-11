//import base from '../base';

export function addUrn(urn) {
  const id = 'urn-'+Date.now();
  return {
    type: 'ADD_URN',
    urn,
    id
  }
}

export function removeUrn(key) {
  return {
    type: 'REMOVE_URN',
    key
  }
}

export function updateUrn(key, updatedUrn) {
  return {
    type: 'UPDATE_URN',
    key,
    updatedUrn
  }
}

/*
export function connect(uid) {
  return {
    type: 'SET_USER',
    uid
  }
}
*/

