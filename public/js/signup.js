// const signupFormHandler = async function(event) {
//     event.preventDefault();
  
//     const usernameEl = document.querySelector("#user-signup");
//     const passwordEl = document.querySelector("#password-signup");
//     fetch("/api/user", {
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
//     .querySelector("#signup-form")
//     .addEventListener("submit", signupFormHandler);


    const signupFormHandler = async (event) => {
        event.preventDefault();
      
        const username = document.querySelector('#user-signup').value.trim();
        
        const password = document.querySelector('#password-signup').value.trim();
      
        if (username && password) {
          const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
          });
      
          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert(response.statusText);
          }
        }
      };
      
    //   document
    //     .querySelector('.login-form')
    //     .addEventListener('submit', loginFormHandler);
      
      document
        .querySelector('.signup-form')
        .addEventListener('submit', signupFormHandler);
      