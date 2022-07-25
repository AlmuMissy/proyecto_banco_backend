const tituloPelicula = 'Regreso al futuro';

/*
  ******* ** ******
  *e***** ** ******
  *e***** ** ***u**
*/

let tituloPeliculaOculto = '';
const posicionesAsterisco = [];
for(let i=0; i<tituloPelicula.length; i++) {
  const letra = tituloPelicula[i];
  if (letra === ' ') {
    tituloPeliculaOculto += ' '
  } else { // si la letra no es un espacio en blanco
    tituloPeliculaOculto += '*'
    posicionesAsterisco.push(i)
  }
}

const lon = posicionesAsterisco.length;
const posicionAleatoria = Math.round(Math.random() * lon);
const tituloPeliculaArray = tituloPelicula.split('');
const tituloPeliculaOcultoArray = tituloPeliculaOculto.split('');
const letraPelicula = tituloPeliculaArray[posicionAleatoria];
tituloPeliculaOcultoArray[posicionAleatoria] = letraPelicula

console.log(tituloPeliculaArray);
console.log(tituloPeliculaOcultoArray);




