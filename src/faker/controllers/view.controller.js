import ProductoService from "../services/productos.service.js";
const productoService = new ProductoService();

class ViewController{

  async index(req,res){
    const productos = await productoService.listarUsuariosRandom();
    res.render('productos',{
      productos,
      nombre:req.session.nombre
    });
  }

  async renderLogin(req,res){
    const productos = await productoService.listarUsuariosRandom();
    res.render('login',{
      productos
    });
  }

  async renderLogout(req,res){
    let nombre = req.session.nombre;
    req.session.destroy(err=>{
      if(err){
        nombre = "";
      }
      res.render('logout',{
        nombre
      });
    })
  }
}

export default ViewController;