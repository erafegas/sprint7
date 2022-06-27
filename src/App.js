import './app.css';
import { useState } from "react";
import styled from 'styled-components';


    function App() {


      
    const [web, setWeb]=useState(false);
    const [seo, setSeo]=useState(false);
    const [ads, setAds]=useState(false);

    const [total, setTotal]=useState(0);

    const handleChange=(data)=> {

      if (data === "web") {
        if ( web === false) {
          setTotal(total + 500);
          setWeb(true);          
        }
        else  {
          setTotal(total - 500);
          setWeb(false);
        }
      }

      if (data === "seo") {
        if (seo === false){
          setTotal(total + 300);
          setSeo(true);
        }
        else {
            setTotal(total - 300);
            setSeo(false);
          }
      }

      if ( data === "ads") {
        if (ads === false){
          setTotal(total + 200);
          setAds(true);
        }
        else {
            setTotal(total - 200);
            setAds(false);
          }
      }
    }
  

  return (
    <div className="App"> 
      <p> Que quieres hacer? </p>
        <ul>
          <li className='llista'> 
            <input
                type='checkbox'
                className='llista-cb'
                id='web'
                value={web}
                onChange={()=> handleChange("web")}/> <label for ="web">  Una pàgina web (500€)  </label>
             </li>
   
             <li className='llista'> 
            <input 
                type='checkbox'
                className='llista-cb'
                id='seo'
                value={seo}
                onChange={()=> handleChange("seo")}/>  <label for ="seo">  Una consultoria SEO (300€)  </label>
            </li>
            <li className='llista'> 
            <input 
                type='checkbox'
                className='llista-cb'
                id='ads'  
                value={ads}          
                onChange={()=> handleChange("ads")}/>  <label for ="ads">  Una campanya de Google Ads (200€)  </label>
            </li>
        </ul>
        <div>
          <ul className="total"> <li> Total : {total} €</li></ul>
        </div>
    </div>
  );
}

export default App;
