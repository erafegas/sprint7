import { Fragment, useState, useEffect}  from "react";
import styled from "styled-components";


const InputsPanel = styled.div `
width:350px;
height: 100px;
border: 1px solid black;  
border-radius: 20px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`;    


const  Panel =  () => {

  const preus = { web: 500, seo: 300, ads: 200};

  const [total, setTotal] = useState(0);
  //inputs show
  const [inputs, setInputs] = useState('none');
  //inputs calc
  const [paginas, setPaginas] = useState(0);
  const [idiomas, setIdiomas] = useState(0);

  useEffect(() => {    
    setTotal(parseInt(localStorage.getItem('total')))
    setPaginas(parseInt(localStorage.getItem('paginas')))
    setIdiomas(parseInt(localStorage.getItem('idiomas')))
  }, [])

  useEffect(() => {   
       localStorage.setItem('total', total)
    localStorage.setItem('paginas', paginas)
    localStorage.setItem('idiomas', idiomas)
 }, [paginas, idiomas, total])


/*
  const handleChangeInputs = (valor , nom) => {

      if ( nom === "pags") {
        setPaginas(valor)
        setTotal(preus.web + (valor * idiomas * 30));
      }
      else if ( nom === "idi") {
        setIdiomas(valor)
        setTotal(preus.web + (valor * paginas * 30));
      }
  }
*/

function handleChangePags(pags){
  setPaginas(pags)
  localStorage.setItem('paginas', paginas)
  setTotal(preus.web + (paginas * idiomas * 30))
  localStorage.setItem('total', total)  
}

function handleChangeIdis(idis){
  setIdiomas(idis)
  localStorage.setItem('idiomas', idiomas)
  setTotal(preus.web + (paginas * idiomas * 30))
  localStorage.setItem('total', total)  
}

  const handleChange = (event) => {

  let isCheck = event.target.checked; // true false
  let nameCheckbox = event.target.name; // seo ads web
  let preuServei = preus[nameCheckbox];

  if (isCheck) {
    setTotal(total + preuServei);
    localStorage.setItem('total', total)

    if (nameCheckbox === 'web') {
      setInputs('block');
      setTotal(total + preuServei);
    }
  }
  else {
      if (nameCheckbox === 'web') {
        setInputs('none');
        setTotal(total - preuServei);
      }
      else {
              setTotal(total - preuServei);
      }
    }
  } 
  return (
    <Fragment> 
      <p> Que quieres hacer? </p>
      <ul>
        <li className='llista'> 
          <input type='checkbox' className='llista-cb' name='web' onChange={handleChange}/> 
          <label htmlFor ="web"> Una pàgina web (500€) </label>
        </li>
        <div style={{ display: inputs}}>
          <InputsPanel>
            <label htmlFor="paginas"> Número de páginas </label> 
            <button type="button" onClick={() => handleChangePags( pagina => pagina- 1)}> - </button>
              <input type='text' value={paginas} min={0} id="paginas"/> 
            <button type="button" onClick={() => handleChangePags( pagina => pagina + 1)}> + </button>
            <label htmlFor="idiomas"> Número de idiomas  </label> 
            <button type="button" onClick={() => handleChangeIdis( idioma => idioma - 1)}> - </button>
              <input type='text'  value={idiomas} min={0} id="idiomas"/>  
            <button  type="button" onClick={() => handleChangeIdis( idioma => idioma + 1)}> + </button>
          </InputsPanel> 
        </div>
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
    </Fragment>
  )
}

export default Panel;