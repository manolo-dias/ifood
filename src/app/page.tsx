"use client"
import { BrowserRouter } from "react-router-dom"
import  Header  from "./components/header/header"
import  Main from "./pages/main"


export default function Home() {
  return (
    <div>
      <BrowserRouter><Header/></BrowserRouter>
      <Main/>
    </div>
  );
}
