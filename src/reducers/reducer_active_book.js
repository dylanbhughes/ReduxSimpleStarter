// State argument is not the application state, only the state that this
// reducer is responsible for
export default function(state = null, action) {
  // if the action's type is book selected, return the payload of the action
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  // if we don't care about the action
  return state;
}
