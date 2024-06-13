import { useContext } from "react"
import { DataContext } from "../../Context/DataContext"

function ResultBox() {
    const { result } = useContext(DataContext)
    
  return (
    <div className='frame3'>
        <div className="frame3Header">
        <h1>Result</h1>
        </div>
        <div className="frame3Content">
            <h1>{result}</h1>
        </div>
    </div>
  )
}

export default ResultBox