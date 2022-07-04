import './app.css';
import { useState } from "react";


  function App() {
     
    const [total, setTotal] = useState(0);
    
    
    const handleChange = (event) => {


      let isCheck = event.target.checked; // true false
      let nameCheckbox = event.target.name; // seo ads web

      const preus = { web: 500, seo: 300, ads: 200};
      let count = preus[nameCheckbox]

      if (isCheck) {
        setTotal(total + count);
      }
      else {
        setTotal(total - count);
      }

    }
   

  return (
    <div className="App"> 
      <p> Que quieres hacer? </p>
        <ul>
          <li className='llista'> 
            <input type='checkbox' className='llista-cb' name='web' onChange={handleChange}/> 
            <label htmlFor ="web">  Una pàgina web (500€)  </label>
          </li>
          <li className='llista'> 
            <input type='checkbox' className='llista-cb' name='seo' onChange={handleChange}/>  
            <label htmlFor ="seo">  Una consultoria SEO (300€)  </label>
          </li>
          <li className='llista'> 
            <input type='checkbox' className='llista-cb' name='ads' onChange={handleChange}/>  
            <label htmlFor ="ads">  Una campanya de Google Ads (200€)  </label>
          </li>
        </ul>
        <div>
          <ul className="total"> <li> Total: {total} €</li></ul>
        </div>
    </div>
  );
}


export default App;
