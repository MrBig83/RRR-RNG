import { useContext } from "react"
import { DataContext } from "../../Context/DataContext"

function InputBox() {

    const { setInputData, inputData, list, setList } = useContext(DataContext)

function addInput() {
      if(inputData != "") {
        if(list[0] == "") {
            console.log("Den är noll");
            list.splice(0,1)
        }
          list.push(inputData)
          setList(list)
        }
        setInputData("")
    }

  return (
    <div className='frame1'>
        <div className="frame1Header">
            <h1>Register</h1>
            <input type="text" onChange={(e) => setInputData(e.target.value)} value={inputData}/>
            <button onClick={addInput}>+ Lägg till</button>
        </div>

        <div className="frame1Content">
            {list?.map((item: string) => (     
                <p key={item}>{item}</p>        
            ))}
        </div>        
    </div>
  )
}

export default InputBox