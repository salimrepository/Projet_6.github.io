    const container = document.querySelector('.gallery');
    
    function creatGallery () {
        
        for(let i= 0; i<11; i++){
            const divFigure = document.createElement('figure');
            container.appendChild(divFigure);
      
            const img = document.createElement('img');
            divFigure.appendChild(img);

            const title = document.createElement("p");
            divFigure.appendChild(title);

            const url = "http://localhost:5678/api/works";
            
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
    liFour.classList.add('hotel-et-restaurants');
    liFour.textContent = 'Hôtels & restaurants' 
    unList.appendChild(liFour);

// placement dans le DOM

const divFiltres = document.querySelector('.filtres');
const containerGallery = document.querySelector('.gallery');

containerGallery.insertAdjacentHTML('beforebegin', divFiltres.outerHTML);
divFiltres.parentNode.removeChild(divFiltres);

}
creatFilter()

// creation d'une fonction pour supprimer les enfants (figure) au clic des filtres

function clearGallery() {
    const container = document.querySelector('.gallery');
    while (container.firstChild) {
      container.firstChild.remove(); 
    }
  }
  
// Fonction pour images objets
function fetchObjets() {
    
    fetch('http://localhost:5678/api/works')
      .then(response => response.json())
      .then(data => {
        
        const filteredObjets = data.filter(data => {
          return data.category.name === 'Objets'; 
        });
  
        // ajout des images filtrés objets avec addEventListener et condition
        const Objets = document.querySelector(".objets");
        const container = document.querySelector('.gallery');

        Objets.addEventListener('click', () => {
            // appel de la fonction pour suprimer galerie
            clearGallery(); 

            let imagesAdded = false;
            
            if (!imagesAdded) {

                filteredObjets.forEach(objets => {
                const id1 = document.createElement('figure');
                container.appendChild(id1);
                    
                const img = document.createElement('img');
                id1.appendChild(img);
              
                const title = document.createElement("p");
                id1.appendChild(title);
                                  
                img.src = objets.imageUrl;
                title.textContent = objets.title;

            });
  
            imagesAdded = true; 
            
          }
          
        });
        
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données de l\'API :', error);
      });
      
  }
  
  fetchObjets();
  

// Fonction pour images appartements
function fetchAppt() {
    
    fetch('http://localhost:5678/api/works')
      .then(response => response.json())
      .then(data => {
        
        const filteredAppartements = data.filter(data => {
          return data.category.name === 'Appartements'; 
        }); 
  
        const Appartements = document.querySelector(".appartements");
        const container = document.querySelector('.gallery');
        
        
        Appartements.addEventListener('click', () => {
            
            clearGallery();

            let imagesAdded = false;  
          
          if (!imagesAdded) {
            filteredAppartements.forEach(appartements => {
              const id1 = document.createElement('figure');
              container.appendChild(id1);
                    
              const img = document.createElement('img');
              id1.appendChild(img);
              
              const title = document.createElement("p");
              id1.appendChild(title);
                                  
              img.src = appartements.imageUrl;
              title.textContent = appartements.title;
              
            });
  
            imagesAdded = true;
          }
          
        });
        
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données de l\'API :', error);
      });
      
  }
  
  fetchAppt();

// Fonction pour images hotels
function fetchHOTEL() {
  
  fetch('http://localhost:5678/api/works')
    .then(response => response.json())
    .then(data => {
      const filteredHotels = data.filter(data => {
        return data.category.name === 'Hotels & restaurants';
      });
      

      const Hotels = document.querySelector(".hotel-et-restaurants");
      const container = document.querySelector('.gallery');
      

      Hotels.addEventListener('click', () => {

        clearGallery();

        let imagesAdded = false;

        if (!imagesAdded) {
          filteredHotels.forEach(hotel => {
            const id1 = document.createElement('figure');
            container.appendChild(id1);

            const img = document.createElement('img');
            id1.appendChild(img);

            const title = document.createElement("p");
            id1.appendChild(title);

            img.src = hotel.imageUrl;
            title.textContent = hotel.title;
          });

          imagesAdded = true;
        }
      });
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données de l\'API :', error);
    });
}

fetchHOTEL();


// Fonction pour images tous
function fetchAll() {
   
    const Tous = document.querySelector(".all");
    const container = document.querySelector('.gallery'); 

    Tous.addEventListener('click', () => {
            
        clearGallery();

        let imagesAdded = false;
            
        if (!imagesAdded) {
            
            creatGallery ()      
  
            imagesAdded = true; 
            
        }
          
    });    
      
}
  
fetchAll();
