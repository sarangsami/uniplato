interface DeleteSquareProps {
  handleDelete(): void;
  name: string;
}

const SquareItem: React.FC<DeleteSquareProps> = ({handleDelete, name}) => {
  return (
    <div className="square">
      {name}
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};

export default SquareItem;
