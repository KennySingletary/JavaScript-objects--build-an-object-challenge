
const main = document.querySelector('main');
let html = '';

for ( let i = 0; i < pets.length; i++ ){
  let pet = pets[i];
  html +=`
    <h2>${ pet.name}</h2>,
    <h3>${ pet.type } | ${ pet.breed } </h3>,
    <p>Age: ${ pet.age }</p>,
    <img src= "${pet.photo}" alt="${pet.name}">
  `;
};

main.insertAdjacentHTML('beforeend', html);



//      <h2>Joey</h2>
//      <h3>Dog | Australian Shepherd</h3>
//      <p>Age: 8</p>
//      <img src="img/aussie.jpg" alt="Australian Shepherd">