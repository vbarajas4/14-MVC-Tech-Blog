async function commentFormHandler(event) {
    event.preventDefault();
  
    const content = document.querySelector('#comment-post').value;
    
    const post_id = document.location.href.split("/").pop();
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({
        comment_text: content,
        post_id: parseInt(post_id)
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);