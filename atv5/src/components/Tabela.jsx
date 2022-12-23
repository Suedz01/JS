import React from "react";
import data_json from '../data.json';

function Tabela() {

    /* FIRST TRY 
const mostra_dado = data_json.map(
  (info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.city}</td>
      </tr>
    )
  }
)*/

    //SECOND TRY
    let data = data_json.map(
        (info) => {
            return (
                <tr>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.city}</td>
                </tr>
            )
        })
    return data;
} export default Tabela;