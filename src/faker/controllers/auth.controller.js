class AuthController {

  async renderLogin(req,res){
    res.render('login',{});
  }

  async login(req, res) {
    try {
      res.redirect("/");
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
