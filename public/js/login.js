let url = "";

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/create');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log(url);
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  console.log(name, email, password);
  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ url, name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/create');
    } else {
      alert(response.statusText);
    }
  }

};

function changeBackgroundImage() {
  document.body.style.backgroundImage = "url('/images_character/intro_page.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}

changeBackgroundImage ();


const white = document.getElementById("log");

white.style.color = "white";
white.style.backgroundImage.opacity = "1"


document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('#signupBtn')
  .addEventListener('click', signupFormHandler);

  var myWidget = cloudinary.createUploadWidget({
    cloudName: 'cdeng1999', 
    uploadPreset: 'pfk7wqjo'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
        url = result.info.url;
      }
    }
  )
  
  document.getElementById("upload_widget").addEventListener("click", function(event){
    event.preventDefault();  
    myWidget.open();
    }, false);