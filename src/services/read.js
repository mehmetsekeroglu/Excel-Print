import XLSX from 'xlsx';

const ReadExcell=(file)=>{

            const promise = new Promise((res, rej) => {
              const fileReader = new FileReader();
              fileReader.readAsArrayBuffer(file);
              fileReader.onload = (e) => {
                const bufferArray = e.target.result;
                const wb = XLSX.read(bufferArray, { type: "buffer" });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json(ws);
                res(data);
                return data
              }
              fileReader.onerror=(err)=>{
                  rej(err)
              }
            })
            promise.then((d)=>{
                console.log(d)
             })
                 return promise 
            }
 export default ReadExcell;  