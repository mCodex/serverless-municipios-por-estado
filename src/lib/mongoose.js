import States from '../models/state';

export function getAllStates() {
  return States.find({}, '-cidades');
}

export function getCityByStateId(stateId) {
  return States.findById(stateId, '-_id cidades');
}
