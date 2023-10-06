import useColor from "../hooks/useColor";

const Color = props => {

  const {
    colorsArray, 
    selectedColor, 
    incrementIndex,
    decrementIndex
  } = useColor(['red', 'green', 'firebrick', 'goldenrod', 'cornflowerblue', 'lime', 'purple']);

  return (
    <div className="color" style={{backgroundColor: selectedColor}}>
      <button onClick={decrementIndex}>Prev</button>
      <button onClick={incrementIndex}>Next</button>
    </div>
  )


}

export default Color;