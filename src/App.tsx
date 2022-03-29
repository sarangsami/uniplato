import {useDispatch, useSelector} from 'react-redux';
import SquareItem from './components/SquareItem';
import {
  addSquare,
  deleteSquare,
  editSquares,
  Payload,
} from './redux/actions/squareAction';
import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd';
import {useEffect, useState} from 'react';
import {SquaresState} from './redux/reducers/squaresReducer';
import './styles/App.scss';
import List from './components/List';

const App: React.FC = () => {
  const squares = useSelector<SquaresState, Payload[]>(
      (state) => state.squares,
  );
  const dispatch = useDispatch();

  const addSquareHandler = (square: Payload) => {
    dispatch(addSquare(square));
  };

  const deleteSquareHandler = (square: Payload) => {
    dispatch(deleteSquare(square));
  };

  const [items, setItems] = useState<Payload[]>([]);

  useEffect(() => {
    if (squares) {
      setItems(squares);
    }
  }, [squares]);

  const onDragEnd = (result: any) => {
    const newArray = [...items];
    const element = newArray[result.source.index];
    newArray.splice(result.source.index, 1);
    newArray.splice(result.destination.index, 0, element);
    setItems(newArray);
    dispatch(editSquares(newArray));

    console.log(result);
    if (!result.destination) {
      console.log(result);
    }
  };

  return (
    <div className="body">
      <DragDropContext onDragEnd={onDragEnd}>
        <List title="Disponíveis" onDragEnd={onDragEnd} name="Squares">
          {items.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id + ''} index={index}>
              {(
                  provided: DraggableProvided | any,
                  snapshot: DraggableStateSnapshot,
              ) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <SquareItem
                    handleDelete={() =>
                      deleteSquareHandler({id: item.id, name: item.name})
                    }
                    name={item.name}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Draggable>
          ))}
        </List>
      </DragDropContext>

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
