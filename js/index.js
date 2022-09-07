import { Router }  from  './router.js'  

    //controle das rotas
    const router = new Router()
    //recriar as rotas
    router.add('/', "/pages/home.html" )
    router.add("/universe", "/pages/universe.html" )
    router.add("/exploration", "/pages/exploration.html" )
    router.add( 404, "/pages/404.html" )
  
  
    router.handle() 

   
    window.onpopstate = () => router.handle()
    window.route = () => router.route()