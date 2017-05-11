import base from '../base';

export function addUrn(urn) {
  const id = 'urn-'+Date.now();
  return {
    type: 'ADD_URN',
    urn,
    id
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

/*
// remove urn
export function removeUrn(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}
*/