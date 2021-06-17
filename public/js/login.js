// const loginFormHandler = async function(event) {
//     event.preventDefault();
  
//     const usernameEl = document.querySelector("#user-login");
//     const passwordEl = document.querySelector("#password-login");
//     console.log(usernameEl);
//     console.log(passwordEl);
//     fetch("/api/users/login", {
//       method: "post",
//       body: JSON.stringify({
//         username: usernameEl.value,
//         password: passwordEl.value
//       }),
//       headers: { "Content-Type": "application/json" }
//     })
//       .then(function() {
//         document.location.replace("/dashboard");
//       })
//       .catch(err => console.log(err));
//   };
  
//   document
//     .querySelector("#login-form")
//     .addEventListener("submit", loginFormHandler);

  

    const loginFormHandler = async (event) => {
      event.preventDefault();
      console.log("is it working")
      // Collect values from the login form
      const username = document.querySelector('#user-login').value.trim();
      const password = document.querySelector('#password-login').value.trim();
    
      if (username && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          // If successful, redirect the browser to the dashboard page
          document.location.replace('/dashboard');
        } else {
          alert(response.statusText);
        }
      }
    };   
    document
        .querySelector('.login-form')
        .addEventListener('submit', loginFormHandler); 