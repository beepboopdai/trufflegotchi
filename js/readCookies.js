const cookiesList = document.cookie;

console.log("cookies read: " + cookiesList)

//dark mode save
if ( cookiesList.includes('darkMode?=y') ) {
    document.body.classList.toggle("dark")
}