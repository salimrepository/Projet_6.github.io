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
    unList.classList.add("ulFiltres")
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
  

const login = document.getElementById("login");
login.addEventListener("click", () => {
    window.location.href = 'login.html';
  });

  function removeFilters() {
    const shouldRemove = sessionStorage.getItem('removeFilters');
    if (shouldRemove === 'true') {
      const filtersDiv = document.querySelector('.filtres ul'); console.log(filtersDiv);
      if (filtersDiv) {
        filtersDiv.remove();
      }
      sessionStorage.removeItem('removeFilters');
    }
  }
  
  removeFilters();

  function removeLogin() {
    const logindRemove = sessionStorage.getItem('removeLogin');
    if (logindRemove === 'true') {
      const deletLogin = document.querySelector('#login'); console.log(deletLogin);
      if (deletLogin) {
        deletLogin.innerHTML = '<li>logout</li>';
        deletLogin.style.fontSize = '14px'
        deletLogin.style.paddingLeft = '0px'
      }
      sessionStorage.removeItem('removeLogin');
    }
  }
  
  removeLogin();


  function createCustomDiv() {
    // Création de la div
    const div = document.createElement('div');
  
    // Ajout de styles à la div
    div.style.backgroundColor = 'black';
    div.style.width = '1440px';

    div.style.color = 'white';
    div.style.textAlign = 'center';
    div.style.padding = '10px';
    div.style.height = '59px';
    div.style.marginLeft = '-150px';
    div.style.padding = '0px';
    

  
    // Création du conteneur pour le titre et le bouton
    const container = document.createElement('div');
    container.style.display = 'flex';  // Utilisation de flexbox pour aligner les éléments horizontalement
    container.style.justifyContent = 'center';
    container.style.paddingTop = '12px';
    container.style.alignItems = 'center';
    container.style.zIndex = '70';

    // Création de l'icone
    const iconElement = document.createElement('i');
    iconElement.classList.add( 'fa-regular', 'fa-pen-to-square');
    iconElement.style.fontSize = "18px"
    iconElement.style.marginRight = "20px"
    iconElement.style.zIndex = '70';
    
    // Création du titre
    const text = document.createElement('p');
    text.textContent = 'Mode édition';
    text.style.zIndex = '70';
  
    // Création du bouton
    const button = document.createElement('p');
    button.textContent = 'publier les chargements';
    button.style.marginLeft = "20px"
    button.style.border = "1px solid #ffffff"
    button.style.background = "#ffffff"
    button.style.color = "black"
    button.style.borderRadius = "50px"
    button.style.padding = "10px"
    button.style.zIndex = '70';
    
  
    // Ajout du titre et du bouton au conteneur
    container.appendChild(iconElement);
    container.appendChild(text);
    container.appendChild(button);
    
  
    // Ajout du conteneur à la div
    div.appendChild(container);
  
    // Récupération de l'élément header
    const header = document.querySelector('header');
  
    // Insertion de la div avant l'élément header
    header.parentNode.insertBefore(div, header);
  }
  
  // Vérifier si la redirection vers la session storage a eu lieu
  const redirected = sessionStorage.getItem('redirected');
  
  if (redirected === 'true') {
    // Appel de la fonction pour créer la div personnalisée
    createCustomDiv();
  
    // Supprimer la clé 'redirected' de la session storage
    sessionStorage.removeItem('redirected');
  }
  
  
  function createModifier() {
    // Création de la div
    const div = document.createElement('div');
    div.style.position = 'relative'

    // Création du conteneur pour le titre et le bouton
    const container = document.createElement('div');
    container.classList.add('Modif')
    container.style.display = 'flex';  // Utilisation de flexbox pour aligner les éléments horizontalement
    container.style.alignItems = 'center';
    container.style.position = 'absolute';
    container.style.marginTop = '-55px'
    container.style.marginLeft = '700px'

    // Création de l'icone
    const iconElement = document.createElement('i'); console.log(iconElement);
    iconElement.classList.add( 'fa-regular', 'fa-pen-to-square');
    iconElement.style.fontSize = "18px"
    iconElement.style.marginRight = "10px"
    
    // Création du titre
    const text = document.createElement('p');
    text.textContent = 'Modifier';
  
  
    container.appendChild(iconElement);
    container.appendChild(text);
    
    div.appendChild(container);
  
    const AddMesProjet = document.querySelector('#portfolio h2 ');
    
    // Insertion de la div avant l'élément header
    AddMesProjet.parentNode.insertBefore(div, AddMesProjet.nextElementSibling);
  }
  
  const modifMesProjets = sessionStorage.getItem('modifMesProjets');
  
  if (modifMesProjets === 'true') {
    // Appel de la fonction pour créer la div personnalisée
    createModifier();
  
    // Suppression la clé 'redirected' de la session storage
    sessionStorage.removeItem('modifMesProjets');
  }
  

  function closeModal() {
    // croix pour fermer la modale
    const modal = document.querySelector('.modal')
    const crossContainer = document.createElement('div');
    crossContainer.classList.add('cross')
    crossContainer.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    
    
    modal.appendChild(crossContainer)
    
    
    crossContainer.style.position = 'absolute'
    crossContainer.style.top = '30px'
    crossContainer.style.right = '30px'
    crossContainer.style.fontSize = '24px'
    
    const cross = document.querySelector('.cross');
    
      cross.addEventListener('click', () => {
      const modal = document.querySelector('.modal');
      const backbody = document.querySelector('.backbody');
    
      modal.remove();
      backbody.remove();
    
      
    });

    const backbody = document.querySelector('.backbody');

    backbody.addEventListener('click', () => {
      const modal = document.querySelector('.modal');
      const backbody = document.querySelector('.backbody');
    
      modal.remove();
      backbody.remove();
    
      
    });

    } 

// Creation de la modal

function createModale (){
  
  // partie container de la modale avec titre et style
  const body = document.querySelector('body');
  const modal = document.createElement('div')
  modal.classList.add('modal')

  const modalH3Container = document.createElement('div')
  modalH3Container.classList.add('h3Container')
  
  modalH3Container.innerHTML = '<h3>Galerie photo</h3>'
  modalH3Container.style.fontSize = '28px'
  modalH3Container.style.textAlign = 'center'
  modalH3Container.style.color = 'black'

  body.appendChild(modal)
  modal.appendChild(modalH3Container)

  body.style.position = 'relative'
  modal.style.border = '1px black outset'
  modal.style.width = '630px'
  modal.style.height = '761px'
  
  modal.style.background = '#ffffff'
  modal.style.position = 'absolute'
  modal.style.zIndex = '100'
  modal.style.top = '660px'
  modal.style.left = '150px'
  modal.style.borderRadius = '10px'
  modal.style.padding = '80px 100px 50px 100px'
 
  const divContainerFigure = document.createElement('div')
  divContainerFigure.classList.add('figureContainer')
  modal.appendChild(divContainerFigure)

  divContainerFigure.style.display = "flex" 
  divContainerFigure.style.gap = "10px" 
  divContainerFigure.style.flexWrap = "wrap"
  divContainerFigure.style.marginTop = "50px"

  // partie API avec ajout icone poubelle et style
  for(let i= 0; i<11; i++){
    
    const Figure = document.createElement('figure');
    divContainerFigure.appendChild(Figure);

    const img = document.createElement('img');
    img.style.width = '117px'
    img.style.height = '142px'
    
    Figure.appendChild(img);

    const iconGarbage = document.createElement('i');
    iconGarbage.classList.add ('fa-solid', 'fa-trash-can');

    Figure.style.position = ('relative')
    iconGarbage.style.position = ('absolute')
    iconGarbage.style.right = ('10px')
    iconGarbage.style.top = ('10px')
    iconGarbage.style.color = ('#ffffff')
    iconGarbage.style.padding = ('7px')
    iconGarbage.style.backgroundColor = ('black')
    iconGarbage.style.borderRadius = ('5px')

    Figure.appendChild(iconGarbage)

    // partie texte 'éditer'
    const editContainer = document.createElement('div');
    editContainer.classList.add('edit')
    Figure.appendChild(editContainer)

    editContainer.innerHTML = "<p>éditer</p>"

    // partie API pour ajout icone flèche sur 1er image et style
    const url = "http://localhost:5678/api/works"; 
    
      fetch (url)
      .then(response => response.json())
      .then(data => {
         img.src = data[i].imageUrl;
         if (i === 0) {
          const arrowIcon = document.createElement('div');
          arrowIcon.classList.add ('fa-solid', 'fa-arrows-up-down-left-right');
          arrowIcon.style.position = ('absolute')
          arrowIcon.style.right = ('40px')
          arrowIcon.style.top = ('10px')
          arrowIcon.style.color = ('#ffffff')
          arrowIcon.style.padding = ('7px')
          arrowIcon.style.backgroundColor = ('black')
          arrowIcon.style.borderRadius = ('5px')
          Figure.appendChild(arrowIcon);

        
        }   
        
          
          iconGarbage.addEventListener('click', () => {
          divContainerFigure.removeChild(Figure);
          
          const figure = document.querySelector('.gallery figure'); console.log(figure);
            figure.remove()
        });
        
        
    })
  } 

  modal.appendChild(document.createElement('hr'))
  const hr = document.querySelector('hr')
  hr.style.width = '628px'
  hr.style.position = 'absolute'
  hr.style.top = '77%'

  // bouton ajouter une photo et style
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button')
  modal.appendChild(buttonContainer)

  buttonContainer.innerHTML = "<p>Ajouter une photo</p>"
  buttonContainer.style.textAlign = 'center'
  buttonContainer.style.display = 'flex'
  buttonContainer.style.justifyContent = 'center'
  buttonContainer.style.margin = '50px 0 25px 200px'
  buttonContainer.style.width = '237px'
  buttonContainer.style.padding = '10px 0px 10px 0px'
  buttonContainer.style.border = '1px solid #1D6154'
  buttonContainer.style.background = '#1D6154'
  buttonContainer.style.color = '#ffffff'
  buttonContainer.style.borderRadius = '50px'
  buttonContainer.style.position = 'absolute'
  buttonContainer.style.top = '77%';

  // bouton supprimer la galerie
  const deleteGalerie = document.createElement('div');
  deleteGalerie.classList.add('delete')
  modal.appendChild(deleteGalerie)

  deleteGalerie.innerHTML = "<p>Supprimer la galerie</p>"
  deleteGalerie.style.display = 'flex'
  deleteGalerie.style.textAlign = 'center'
  deleteGalerie.style.color = 'red'
  deleteGalerie.style.position = 'absolute'
  deleteGalerie.style.top = '90%';
  deleteGalerie.style.left = '42%'

  

  // partie arriere plan de la modale 
  const backbody = document.createElement('div');

  backbody.classList.add('backbody')
  body.appendChild(backbody)

  backbody.style.position = 'absolute'
  backbody.style.top = '0'
  backbody.style.left = '-150px'
  backbody.style.zIndex = '50'
  backbody.style.height = '100%'
  backbody.style.width = '1440px'
  backbody.style.background = 'rgba(51, 51, 51, 0.5)'
  backbody.style.opacity = '1'

  // partie fermeture de la modale 
  closeModal()

} createModale()


 // creation modal n2 
 function modal2 (){
    
  const figureContainer = document.querySelector('.figureContainer');
  const buttonAjouter = document.querySelector('.modal .button ');
   
  const h3New = document.querySelector('.h3Container h3');
  const supprimerDelete = document.querySelector('.delete p')
  

  buttonAjouter.addEventListener('click', () => {

    figureContainer.style.display = 'none'
    h3New.textContent = 'Ajout photo'
    supprimerDelete.style.display = 'none'
    buttonAjouter.style.display = 'none'
   

    // Création du formulaire
    const modal = document.querySelector('.modal')
const form = document.createElement('form');
const formContainer = document.createElement('div')
formContainer.classList.add('formulaire')
formContainer.appendChild(form)
modal.appendChild(formContainer)
modal.style.height = '600px'


form.style.marginTop = "40px"
form.style.display = "flex"
form.style.flexDirection = "column"
// form.method = 'post'
// form.action = '/works'
// form.enctype = 'multipart/form-data'

    // Champ de fichier
const fileLabel = document.createElement('label');
fileLabel.setAttribute('for', 'image')
fileLabel.style.background = 'rgba(232, 241, 246, 1)'
fileLabel.style.width = '628px'
fileLabel.style.height = '169px'
fileLabel.style.display = 'flex'
fileLabel.style.justifyContent = 'center'
fileLabel.textContent = "";
fileLabel.style.marginBottom = '20px'

const fileInput = document.createElement('input');
fileInput.name = 'image' 
fileInput.id = 'image'
fileInput.type = "file";
fileInput.style.display = 'none'
fileInput.style.position = "absolute"
fileInput.style.top = "240px"
fileInput.style.left = "340px"
fileInput.style.height = '24px' 
fileInput.style.zIndex = "500"
form.appendChild(fileLabel);
form.appendChild(fileInput);


// Champ de texte 1
// label
const text1Label = document.createElement('label');
text1Label.setAttribute('for', 'title')
text1Label.textContent = "Titre :";
text1Label.style.marginBottom = '10px'
//input
const text1Input = document.createElement('input');console.log(text1Input);
text1Input.name = 'title' 
text1Input.id = 'title' ;
text1Input.style.height = '51px'
text1Input.style.border = 'rgba(255, 255, 255, 1)'
text1Input.style.boxShadow = '0px 4px 14px rgba(0, 0, 0, 0.09)'
text1Input.style.marginBottom = '20px'
text1Input.type = "text";

form.appendChild(text1Label);
form.appendChild(text1Input);


// Champ de texte 2
//label
const text2Label = document.createElement('label');
text2Label.setAttribute('for', 'category')
text2Label.textContent = "Catégorie :";
text2Label.style.marginBottom = '10px'

const select = document.createElement('select');
text2Label.appendChild(select)
select.name = 'category'
select.id = 'category'

const option0 = document.createElement('option')
select.appendChild(option0)
option0.id = 'op0'
option0.value = ''
option0.textContent = ''

const option1 = document.createElement('option')
select.appendChild(option1)
option1.id = 'op1'
option1.value = 'Objets'
option1.textContent = 'Objets'

const option2 = document.createElement('option')
select.appendChild(option2)
option2.id = 'op2'
option2.value = 'Appartements'
option2.textContent = 'Appartements'

const option3 = document.createElement('option')
select.appendChild(option3)
option3.id = 'op3'
option3.value = 'Hotels & restaurants'
option3.textContent = 'Hotels & restaurants'


//input

select.style.height = '51px'
select.style.border = 'rgba(255, 255, 255, 1)'
select.style.boxShadow = '0px 4px 14px rgba(0, 0, 0, 0.09)'
select.style.marginBottom = '20px'
select.type = "text";

form.appendChild(text2Label);
form.appendChild(select);


// Bouton Valider
const submitButton = document.createElement('input');
submitButton.type = "submit";
submitButton.value = "Valider";
submitButton.disabled = true;
submitButton.style.padding = '8px'
submitButton.style.marginTop = '90px'
submitButton.style.background = 'rgb(192,192,192)'
submitButton.style.width = '237px'

form.appendChild(submitButton);


const divContainerAjout = document.createElement('div')
divContainerAjout.classList.add('Ajouter-photo')
form.appendChild(divContainerAjout)

divContainerAjout.style.display = 'flex'
divContainerAjout.style.flexDirection = 'column'
divContainerAjout.style.alignItems = 'center'
divContainerAjout.innerHTML = '<i class="fa-sharp fa-regular fa-image"></i>'
divContainerAjout.style.position = 'absolute'
divContainerAjout.style.top = '170px'
divContainerAjout.style.left = '340px'
divContainerAjout.style.fontSize = '58px'



const buttonAjout = document.createElement('p')
buttonAjout.textContent = '+ Ajouter photo'
divContainerAjout.appendChild(buttonAjout)

buttonAjout.style.fontSize = '19px'
buttonAjout.style.marginTop = '10px'
buttonAjout.style.padding = '10px'
buttonAjout.style.background = 'red'
buttonAjout.style.borderRadius = '50px'
buttonAjout.style.width = '173px'
buttonAjout.style.textAlign = 'center'
buttonAjout.style.background = 'rgb(211,211,211)'




const buttonFormat = document.createElement('p')
buttonFormat.textContent = 'jpg, png : 4mo max'
divContainerAjout.appendChild(buttonFormat)

buttonFormat.style.fontSize = '15px'
buttonFormat.style.marginTop = '10px'

buttonAjout.addEventListener('click', () => {
  
  fileInput.click()
  
})

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];

  if (file) {
    
    const reader = new FileReader();

    
    reader.addEventListener('load', (event) => {
      const imageSrc = event.target.result;

      
      const previewImage = document.createElement('img');
      previewImage.src = imageSrc;
      
      previewImage.style.marginTop = '-21px';
      previewImage.style.marginLeft = '-135px';

      
      const existingIcon = document.querySelector('.fa-sharp');
      if (existingIcon) {
        existingIcon.remove();
      }
      const existingP1 = document.querySelector('.Ajouter-photo p');
      if (existingP1) {
        existingP1.remove();
      }

      const existingP2 = document.querySelector('.Ajouter-photo p');
      if (existingP2) {
        existingP2.remove();
      }

      
      divContainerAjout.appendChild(previewImage);
    });

    
    reader.readAsDataURL(file);
  }
  })


  
function choseCategory() {

  

 
  
  select.addEventListener('click', () => {
     
        
        submitButton.disabled = false;
        submitButton.style.background = 'rgba(29, 97, 84, 1)';
      
      
    })
  
}choseCategory()
  
const formulaire = document.querySelector('.formulaire'); console.log(formulaire);
formulaire.addEventListener('submit', (event) => {
  event.preventDefault(); 

  // Get form data

  const formData = new FormData();

  // const img = document.getElementById(' image').getAttribute('src');console.log(img);
  const title = document.getElementById('title').value;
  const category = document.getElementById('category').value; 
 
 

  const categoryValue0 = option0.value; console.log(categoryValue0);
  const categoryValue1 = option1.value;console.log(categoryValue1);
  const categoryValue2 = option2.value;
  const categoryValue3 = option3.value;

  
  formData.append("title", title);
  formData.append('category', category)
  
  formData.append('category', categoryValue0);
  formData.append('category', categoryValue1);
  formData.append('category', categoryValue2);
  formData.append('category', categoryValue3);
  
  const requestOptions = {
    method: 'POST',
    
    headers: {
      accept: "application/json",
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4',
    },
    body: formData,
  };

  
  fetch("http://localhost:5678/api/works", requestOptions)
    .then(response => response.json())
    .then(data => {
     
      console.log(data);
    })
    .catch(error => {
      
      console.error('Error:', error);
    });
});


retour()

  })
  } 

  // fleche retour vers modale1
  
  function retour(){
    const h3First = document.querySelector('.h3Container h3');
    const figureContainer = document.querySelector('.figureContainer');
    const supprimerDelete = document.querySelector('.delete p')
    const buttonAjouter = document.querySelector('.modal .button ');
    const formulaire = document.querySelector('.formulaire')
    const arrowContainer = document.createElement('div');
    arrowContainer.classList.add('arrow-back')
    const iconarrow = document.createElement('i');
    iconarrow.classList.add( 'fa-solid' , 'fa-arrow-left');
   
    
    arrowContainer.appendChild(iconarrow)
    const modal = document.querySelector('.modal')
    modal.appendChild(arrowContainer)
   
    iconarrow.style.position = 'absolute'
    iconarrow.style.top = '30px'
    iconarrow.style.left = '30px'
    iconarrow.style.fontSize = '24px'

    arrowContainer.addEventListener('click',() =>{
     arrowContainer.style. display = 'none'
     figureContainer.style.display = 'flex'
     formulaire.remove()
     modal.style.height = '731px'
     buttonAjouter.style.display = 'flex'
     supprimerDelete.style.display = 'block'
     h3First.textContent = 'Galerie photo'
    })
  } 

const modifContainer = document.querySelector('.Modif'); console.log(modifContainer);


function modalActive (){
  modifContainer.addEventListener('click', () => {

    createModale()
    modal2()
  })
}
modalActive()



 
  

