const Square = ({value,clickSquare}) => {

  return (
    <button className="btn-square" onClick={clickSquare}>
      {value}
    </button>
  ); 
};

export default Square;
