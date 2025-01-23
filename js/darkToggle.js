const checkbox = document.getElementById("checkbox")

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")

  if ( document.body.classList.contains('dark')) {
    var darkModeQuery = 'y'
  } else {
    var darkModeQuery = 'n'
  }

  // add cookie to save dark mode state thing idk bruh
  expiryDate = new Date()
  newCookie = `darkMode?=${darkModeQuery};`
  document.cookie = newCookie;

  console.log('saved cookie: ' + document.cookie)
})