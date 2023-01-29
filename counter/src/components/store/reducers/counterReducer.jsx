/**
 * variable: xxxXxXx
 * function: xxxXxXx
 * constants: XxxXxx / XXX_XXX_XXX
 * Component: XxxXxx
 */

const ADD_VISIBLE_TYPE = 'add';
const TOGGLE_VISIBLE_TYPE = 'toggleVisible'; // magic number, magic string

export const addAction = (num) => ({
  type: ADD_VISIBLE_TYPE,
  num,
});

export const toggleVisibleAction = () => ({ type: TOGGLE_VISIBLE_TYPE });

const initCounterState = {
  visible: true,
  counter: 1,
};

const counterReducer = (state = initCounterState, action) => {
  switch (action.type) {
    case ADD_VISIBLE_TYPE:
      return { ...state, counter: state.counter + action.num };

    case TOGGLE_VISIBLE_TYPE:
      return { ...state, visible: !state.visible };

    default:
      return state;
  }
};

export default counterReducer;
