import {Action} from '../actions/squareAction';

export interface SquaresState {
  squares: { id: number; name: string }[];
}

const initialState = {
  squares: [],
};

export const squaresReducer = (
    state: SquaresState = initialState,
    action: Action,
) => {
  switch (action.type) {
    case 'ADD_SQUARE':
      if (state.squares.length === 12) {
        return state;
      } else {
        return {...state, squares: [...state.squares, action.payload]};
      }
    case 'DELETE_SQUARE':
      const newArray = [...state.squares];
      const squareIndex = newArray.findIndex((o) => o.id === action.payload.id);
      newArray.splice(squareIndex, 1);
      return {...state, squares: newArray};

    case 'EDIT_SQUARE':
      return {...state, squares: action.payload};

    default:
      return state;
  }
};
