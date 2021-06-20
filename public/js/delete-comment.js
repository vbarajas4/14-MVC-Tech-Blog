async function deleteComment() {
    

const commentId = document.querySelector('input[name="comment-id"]').value;
if (commentId) {
    await fetch(`/api/comments/:${commentId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.reload();
  }
}