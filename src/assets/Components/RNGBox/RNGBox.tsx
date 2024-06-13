import { useContext } from "react";
import { DataContext } from "../../Context/DataContext"

function RNGBox() {
    const { list, setResult } = useContext(DataContext)

    function process() {
        const ammount = list.length
        const res = Math.floor(Math.random()*ammount)
        setResult(list[res]);
    }

  return (
    <div className='frame2'>
        <h1>Randomize</h1>
        <button onClick={process}>Randomize</button>
    </div>
  )
}

export default RNGBox