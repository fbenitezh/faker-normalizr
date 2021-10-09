import ProductoService from "../services/productos.service.js";
const productoService = new ProductoService();

class ViewController{

  async root(req,res){
    const productos = await productoService.listarUsuariosRandom();
    res.render('productos',{
      productos
    });
  }

  async renderLogin(req,res){
    const productos = await productoService.listarUsuariosRandom();
    res.render('login',{
      productos
    });
  }

  async renderLogout(req,res){
    res.render('logout',{
      nombre:'Franco'
    });
  }
}

export default ViewController;