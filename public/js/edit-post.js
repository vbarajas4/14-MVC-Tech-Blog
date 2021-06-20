async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    const postID = document.location.href.split("/").pop();
   
    const response = await fetch(`/api/posts/${postID}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        post_text: content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', newFormHandler);