    const container = document.querySelector('.gallery');
    const imgContainer = document.querySelector('#portfolio');
    let i = 0
   
        

    function creatGallery () {
        
        for(let i= 0; i<11; i++){
            const id1 = document.createElement('figure');
            container.appendChild(id1);
      
            const img = document.createElement('img');
            id1.appendChild(img);

            const title = document.createElement("p");
            id1.appendChild(title);

            const url = "http://localhost:5678/api/works";console.log(url);
            
                fetch (url)
                .then(response => response.json())
                .then(data => {
                    img.src = data[i].imageUrl;
                    title.textContent = data[i].title;         
                })
        }
}
creatGallery ()

function creatFilter() {

    // creation d'une div avec une class et ul

    const containerFiltre = document.querySelector('#portfolio');
    const divUl = document.createElement('div');
    divUl.classList.add("filtres")
    containerFiltre.appendChild (divUl)

    const containerUl = document.querySelector('.filtres');
    const unList = document.createElement('ul');
    containerUl.appendChild(unList)
    
    // creation des li avec des class dans ul
   
    const li = document.createElement("li"); 
    li.classList.add('all');
    li.textContent = 'Tous' 
    unList.appendChild(li);

    const liTwo = document.createElement("li"); 
    liTwo.classList.add('objets');
    liTwo.textContent = 'Objets' 
    unList.appendChild(liTwo);

    const liThree = document.createElement("li"); 
    liThree.classList.add('appartements');
    liThree.textContent = 'Appartements'
    unList.appendChild(liThree);

    const liFour= document.createElement("li"); 
    liFour.classList.add('hotel&restaurats');
    liFour.textContent = 'Hôtels & restaurants' 
    unList.appendChild(liFour);
    


const divFiltres = document.querySelector('.filtres');
const containerGallery = document.querySelector('.gallery');

containerGallery.insertAdjacentHTML('beforebegin', divFiltres.outerHTML);
divFiltres.parentNode.removeChild(divFiltres);

}
creatFilter()

const mySet = new Set();console.log(mySet);

const url = "http://localhost:5678/api/works";console.log(url);

    fetch (url)
        .then(response => response.json())
        .then(data => {
         data.forEach(element => {
         const tableau =  element.category; console.log(tableau);
          mySet.add(tableau);
          
         
            
         
         });     
         const tableau = [...mySet]; 
         const all = tableau;  
         const liObjets = document.querySelector('.objets'); console.log(liObjets);

         liObjets.addEventListener('click', () => {

           console.log(tableau);    

            
        });
         
         })
 
