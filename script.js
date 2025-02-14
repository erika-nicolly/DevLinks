function togglemode() {
  const html = document.documentElement

  /*if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  } */

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./asseats/Avatar-2.jpg")
  } else {
    img.setAttribute("src", "./asseats/Avatar-1.jpg")
  } 
}