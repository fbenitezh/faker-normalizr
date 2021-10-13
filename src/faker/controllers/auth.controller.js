import ProductoService from "../services/productos.service.js";
const productoService = new ProductoService()

class AuthController {

  async renderLogin(req,res){
    res.render('login',{});
  }

  async login(req, res) {
    try {
      const {body:{nombre}} = req;
      req.session.nombre = nombre;
      const productos = await productoService.listarUsuariosRandom();
      res.render("productos",{
        nombre:req.session.nombre,
        productos
      });
    } catch (error) {
      res.status(400).json({
        ok: false,
        error: error.message,
      });
    }
  }

  async logout(req, res) {
    try {
      res.render('logout',{});
    } catch (error) {
      res.status(400).json({
        ok: false,
        error: error.message,
      });
    }
  }
}
export default AuthController;
