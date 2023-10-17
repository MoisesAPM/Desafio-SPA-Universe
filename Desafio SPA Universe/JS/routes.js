export class Router {

  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, "", event.target.href)
  
    this.handle()
  } 

  handle() {
    const {pathname} = window.location
    const route = this.routes[pathname]
  
    if(window.location.pathname == "/") {
        document.body.style.backgroundImage = "url(./assets/mountains-universe-1.png)"
    } else if(window.location.pathname == "/universe") {
        document.body.style.backgroundImage = "url(./assets/mountains-universe02.png)"
    } else {
        document.body.style.backgroundImage = "url(./assets/mountains-universe-3.png)"
    }
    
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector("#app").innerHTML = html
    })
  }
}




