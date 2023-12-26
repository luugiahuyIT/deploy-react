import { useState } from 'react';
import './App.css';
import { CSVLink } from "react-csv";

function App() {
  
  // const headers = [
  //   { label: "URL", key: "url" },
  //   { label: "入力期限", key: "date" },
  //   { label: "区分", key: "distinguish" }
  // ];

  const [fileName, setFileName] = useState('my-csv.csv')

  const [headers, setHeaders] = useState([
    { label: "URL", key: "url" },
    { label: "入力期限", key: "date" },
    { label: "区分", key: "distinguish" }
  ])


  const [data, setData] = useState([
    { url: "abc123", date: "2024/12/30", distinguish: "新規" },
    { url: "abc124", date: "2024/12/30", distinguish: "新規" },
    { url: "abc125", date: "2024/12/30", distinguish: "新規" }
  ])

  
  const generateURLRecord = () => {
    const defaultNumber = 100
    const data = Array.from({length: 11000}, (_, i) => ({ url: `abc${defaultNumber + i}`, date: '2024/12/30', distinguish: '新規' }))
    setData(data)
    setHeaders([
    { label: "URL", key: "url" },
    { label: "入力期限", key: "date" },
    { label: "区分", key: "distinguish" }
    ])
    setFileName('Apply-url-11000.csv')
  }


  const generateSerialRecord = () => {
    const defaultNumber = 100
    const data = Array.from({length: 11000}, (_, i) => ({ serial: `S${defaultNumber + i}`, date: '20241230', distinguish: '新規' }))
    setData(data)
    setHeaders([
      { label: "シリアルナンバー", key: "serial" },
      { label: "入力期限", key: "date" },
      { label: "区分", key: "distinguish" }
    ])
    setFileName('Apply-serial-11000.csv')
  }

  const generateGiftCodeRecord = () => {
    const defaultNumber = 100
    const data = Array.from({length: 11000}, (_, i) => ({ code: `code${defaultNumber + i}`, inactive_code: `xyz${defaultNumber + i}` }))
    setData(data)
    setHeaders([
      { label: "コード", key: "code" },
      { label: "インアクティベートコード", key: "inactive_code" },
    ])
    setFileName('gift-code-11000.csv')
  }


  return (
    <div className="App">
      <div className='wrap'>
        <button className='button-1' onClick={() => generateURLRecord()}>Generate URL Record</button>
      </div>
      <div className='wrap'>
        <button className='button-89' onClick={() => generateSerialRecord()}>Generate Serial Record</button>
      </div> 
      <div className='wrap'>
        <button className='part_line' onClick={() => generateGiftCodeRecord()}>Generate Gift Code Record</button>
      </div>
      <div className='wrap'>
        <CSVLink data={data} headers={headers} filename={fileName} data-text="Download CSV">
          Download CSV
        </CSVLink>
      </div>
    </div>
  );
}

export default App;
