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
            "Content-Type": "application/json"
          },
          body: JSON.stringify(loginData)
        });
  
        if (response.ok) {
          const responseData = await response.json();
          localStorage.setItem("token", responseData.token); // Store token in localStorage
          window.location.href = "index.html"; // Redirect to index.html after login
          
        } else {
          alert("Invalid email or password");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    });


