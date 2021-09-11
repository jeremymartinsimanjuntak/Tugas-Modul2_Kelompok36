import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import DescriptionList from "./components/DescriptionList";
import Avatar from "./components/Avatar";
import Gambar from "./assets/images/gambar1.jpg";

const data = [
    {
        nama: "Jeremy Martin Simanjuntak",
        nim: "21120118120024",
        email:"jeremymartinsimanjuntak@gmail.com",
        ttl:"Padangsidimpuan,8 Juli 2000",
    },
    {
        nama: "Afrina Ayu Insani",
        nim: "21120118120006",
        email:"afrinaayuinsani@gmail.com",
        ttl:"Semarang,4 Juni 2000",
    },
];

ReactDOM.render(
<React.StrictMode>
<App />
<Avatar image={Gambar} kelompok="Kelompok 36" motto="Praktikum Rekayasa Perangkat Lunak Berbasis Komponen"></Avatar>
<DescriptionList judul="Biodata" deskripsi="Rincian data masing-masing anggota kelompok" data={data}/>

</React.StrictMode>,
document.getElementById("root")
);
