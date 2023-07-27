import React from "react";
import CardKontak from "../CardKontak";

function ListKontak(props) {
  return (
    <div>
      <h2>List kontaK</h2>
      <CardKontak nama={props.nama}/>
    </div>
  );
}

export default ListKontak;
