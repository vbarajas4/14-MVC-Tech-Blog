async function commentFormHandler(event) {
    event.preventDefault();
  
    const content = document.querySelector('#comment-post').value;
    
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        comment_text: content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);