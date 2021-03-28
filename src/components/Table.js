import React from 'react'

import ReadExcell from '../services/read'

export default function Table() {
 
    return (
        <div>
       <input type="file" onChange={(e)=>{
           const file=e.target.files[0];
           let list= ReadExcell(file);
         list.then((data)=>{
           data.map(person=>{
              document.querySelector("#table").innerHTML+= `<tr>
              <td>${person.ISIM}</td>
              <td>${person.SOYISIM}</td>
              <td>${person.YAS}</td>
              <td>${person.ALDIGI_MAAS}</td>
              <td>${person.CINSIYETI}</td>
              </tr>`
           })
        })
   
       }}></input>
          <table>
              <thead>
                  <th>ISIM</th>
                   <th>SOYISIM</th>
                   <th>YAS</th>
                   <th>ALDIGI MAAS</th>
                   <th>CINSIYETI</th>
              </thead>
           <tbody id="table"></tbody>
          </table>
        </div>
    )
}