const formRegister = document.getElementById("formRegister");
formRegister.addEventListener('submit', async e => {

  e.preventDefault()

  const datos = {
    nombre: formRegister[0].value,
    direccion: formRegister[1].value,
    password: formRegister[2].value,
  }

  const respuesta = await fetch('/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });

  const content = await respuesta.json();

  const { access_token } = content;

  if (access_token) {
    localStorage.setItem("access_token", access_token);
    location.href = '/'
  } else {
    location.href = '/register-error'
  }
})
