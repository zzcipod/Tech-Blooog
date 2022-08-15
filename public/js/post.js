const newFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#titleInp').value.trim();
    const description = document.querySelector('#descInp').value.trim();
    console.log(title, description);
    if (title && description) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/posts');
      } else {
        alert('Failed to create project');
      }
    }
  };

  
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);