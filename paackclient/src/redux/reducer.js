/* eslint-disable prettier/prettier */
let initialState = {
  makeActive: false,
  id: null,
};
export default function delivery(state = initialState, action) {
  let newState = {...state};
  switch (action.type) {
    case 'ENABLE_ACTIVE':
      newState.makeActive = true;
      newState.id = action.payload;
      return newState;
    case 'DISABLE_ACTIVE':
      newState.makeActive = false;
      newState.id = null;
      return newState;
    default:
      return newState;
  }
}
