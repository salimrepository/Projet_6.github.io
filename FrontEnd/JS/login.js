  //   const formulaire = document.getElementById('formulaire'); console.log(formulaire);
  //   formulaire.addEventListener('submit', function(event) {
  //   event.preventDefault(); // Empêche la soumission du formulaire
  
  //   // Récupérer les valeurs des champs email et password
  //   const email = document.getElementById('email').value;
  //   const password = document.getElementById('password').value;
  
  //   // Création des données à envoyer dans la requête POST
  //   const data = {
  //     email: email,
  //     password: password
  //   };
  
  //   // requête POST avec Fetch
  //   fetch('http://localhost:5678/api/users/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4' // Votre token d'authentification
  //     },
  //     body: JSON.stringify(data)
  //   })
  //   .then(function(response) {
  //     if (response.ok) {
  //       // Redirection vers la page d'accueil si la connexion réussit + sessions storage
  //       return response.json();
  //     } else {
  //       alert('email ou mot de passe invalide');
  //     }
  //   })
  //   .then (function(data){
  //     localStorage.setItem('token', data.token);
  //     window.location.href = 'index.html';
  //     localStorage.setItem('removeFilters', 'true');
  //     localStorage.setItem('removeLogin', 'true');
  //     localStorage.setItem('redirected', 'true');
  //     sessionStorage.setItem('modifMesProjets', 'true');
  //   })
  //   .catch(function(error) {
  //     console.log('Erreur:', error);
  //   });
  // });
  
    const loginForm = document.getElementById("formulaire");
  
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent form submission
  
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      const loginData = {
        email: email,
        password: password
      };
  
      try {
        const response = await fetch("http://localhost:5678/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4"
          },
          body: JSON.stringify(loginData)
        });
  
        if (response.ok) {
          const responseData = await response.json();
          localStorage.setItem("token", responseData.token); // Store token in localStorage
          sessionStorage.setItem("removeLogin", "true")
          sessionStorage.setItem("removeFilters", "true")
          sessionStorage.setItem("createBlackHeader", "true")
          sessionStorage.setItem("createModif", "true")
          window.location.href = "index.html"; // Redirect to index.html after login
        } else {
          alert("Invalid email or password");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    });
  
  
