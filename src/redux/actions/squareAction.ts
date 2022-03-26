export type Payload = {id:number,name:string}

export type Action = {
  type: string;
  payload: Payload;
};

export const addSquare = (square: Payload): Action => ({
  type: "ADD_SQUARE",
  payload: square
});
