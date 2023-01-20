/* Iteración #1: Fetch

1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js. */

fetch('https://api.agify.io?name=michael')
  .then(response => response.json())
  .then(data => {
      console.log(data);
  })
  .catch(error => {
      console.error('Error:', error);
  });

/* 1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input. */

const baseUrl = 'https://api.nationalize.io';

const button = document.querySelector('button');

button.addEventListener('click', () => {
    
  const inputValue = document.querySelector('input').value;
    
  fetch(`${baseUrl}?name=${inputValue}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

/* 1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ. */

button.addEventListener('click', () => {
  
  const inputValue = document.querySelector('input').value;
  
  fetch(`${baseUrl}?name=${inputValue}`)
    .then(response => response.json())
    .then(data => { 
      data.country.map(countries => {
        
        const newElement = document.createElement('p');
        newElement.innerText = `El nombre ${inputValue} tiene un ${countries.probability} porciento de ser de ${countries.country_id}`;
        
        document.body.appendChild(newElement);
      })
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

/* 1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado. */

button.addEventListener('click', () => {

  const inputValue = document.querySelector('input').value;
  
  fetch(`${baseUrl}?name=${inputValue}`)
    .then(response => response.json())
    .then(data => { 
      data.country.map(countries => {
        
        const newElement = document.createElement('p');
        newElement.innerText = `El nombre ${inputValue} tiene un ${countries.probability} porciento de ser de ${countries.country_id}`;
        
        const newButton = document.createElement('button');
        newButton.innerText = 'X';
        newButton.classList.add('remove-button');
        newButton.addEventListener('click', () => {
          newElement.remove();
        });
        newElement.appendChild(newButton);
        
        document.body.appendChild(newElement);
      })
    })
    .catch(error => {
      console.error('Error:', error);
    });
});