import { Action } from "../actions/squareAction";

export interface SquaresState {
  squares: { id: number; name: string }[];
}

const initialState = {
  squares: [],
};

export const squaresReducer = (
  state: SquaresState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADD_SQUARE":
      if (state.squares.length === 12) {
        return state;
      } else {
        return { ...state, squares: [...state.squares, action.payload] };
      }

    default:
      return state;
  }
};
