(async () => {
  try {
    const respuesta = await fetch('/api/datos', {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    });

    if (respuesta.status != 200) {
      return location.href = '/noAutorizado.html'
    }

    const data = await respuesta.json();

    const respuesta2 = await fetch('/plantillas/datos.hbs');
    const plantilla = await respuesta2.text()
    const templateFun = Handlebars.compile(plantilla)
    const html = templateFun({ datos: data.datos, contador: data.contador })

    document.querySelector('main').innerHTML = html

  } catch (error) {
    document.querySelector('main').innerHTML = error
  }
})()

function logout() {
  localStorage.removeItem('access_token');
  location.href = '/login'
}
