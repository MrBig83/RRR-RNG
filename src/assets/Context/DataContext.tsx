import { PropsWithChildren, createContext, useState } from "react";

interface DataContextProps {
  inputData: string;
  setInputData: React.Dispatch<React.SetStateAction<string>>;
  result: string;
  setResult: React.Dispatch<React.SetStateAction<string>>;
  list: string[];
  setList: React.Dispatch<React.SetStateAction<string[]>>;
}

export const DataContext = createContext<DataContextProps>({} as DataContextProps);

const DataContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  
  const [inputData, setInputData] = useState("");
  const [list, setList] = useState([""]);
  const [result, setResult] = useState("")

  return (
    <DataContext.Provider
      value={{
        inputData, 
        setInputData,
        list, 
        setList, 
        result, 
        setResult
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
