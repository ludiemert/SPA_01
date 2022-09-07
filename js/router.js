    export class Router { 
    routes= {} 

    //modelar as rotas do index.js
    add(routeName, page) { 
        this.routes[routeName] = page 
    }

    //função para chamar os eventos
    route(event) {
    event = event || window.event 
    event.preventDefault() 

    window.history.pushState({}, "", event.target.href) 
    this.handle() 
}

    //função para manipular
    handle() { 
    const { pathname } = window.location

    const route = this.routes [pathname] || this.routes [404]  
  
    fetch(route) 
    .then(data => data.text()) 

    .then(html => {
        document.querySelector('#app').innerHTML = html  
    })
        }

}
