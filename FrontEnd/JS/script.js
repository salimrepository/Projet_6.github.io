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
    const containerFiltre = document.querySelector('#portfolio');
    const divUl = document.createElement('div');
    divUl.classList.add("filtres")
    containerFiltre.appendChild (divUl)

    const containerUl = document.querySelector('.filtres');
    const unList = document.createElement('ul');
    containerUl.appendChild(unList)
    

    const filtres = ["Tous", "Objets", "Appartements", "Hôtel & restaurants"];


for (let i = 0; i < filtres.length; i++) {
    const li = document.createElement("li"); 
    const texte = document.createTextNode(filtres[i]); 
    li.appendChild(texte); 
    unList.appendChild(li); 
    
}

const divFiltres = document.querySelector('.filtres');
const containerGallery = document.querySelector('.gallery');

containerGallery.insertAdjacentHTML('beforebegin', divFiltres.outerHTML);
divFiltres.parentNode.removeChild(divFiltres);

}
creatFilter()


const url = "http://localhost:5678/api/works";console.log(url);
fetch (url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);        
                })
