// async function deleteComment() {
    

// const commentId = document.querySelector('input[name="comment-id"]').value;
// if (commentId) {
//     await fetch(`/api/comments/:${commentId}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     document.location.reload();
//   }
// }


const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {//review data-id
    const postId = event.target.getAttribute('data-id');//review data-id
    console.log(postId)
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('.delete-post')
  .addEventListener('click', delButtonHandler);
