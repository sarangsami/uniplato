import { useDispatch, useSelector } from "react-redux";
import SquareItem from "./components/SquareItem";
import { addSquare, deleteSquare, Payload } from "./redux/actions/squareAction";
import { SquaresState } from "./redux/reducers/squaresReducer";
import "./styles/App.scss";

const App: React.FC = () => {
  const squares = useSelector<SquaresState, Payload[]>(
    (state) => state.squares
  );
  const dispatch = useDispatch();

  const addSquareHandler = (square: Payload) => {
    dispatch(addSquare(square));
  };

  const deleteSquareHandler = (square: Payload) => {
    dispatch(deleteSquare(square));
  };

  return (
    <div className="body">
      <div className="container">
        {squares.map(({ name, id }) => (
          <SquareItem key={id} handleDelete={()=>deleteSquareHandler({id,name})} name={name}/>
        ))}
      </div>
      <div>
        <div
          className="add"
          onClick={() =>
            addSquareHandler({
              id: squares.length + 1,
              name: `${squares.length + 1}`,
            })
          }
        >
          Add
        </div>
      </div>
    </div>
  );
};

export default App;
