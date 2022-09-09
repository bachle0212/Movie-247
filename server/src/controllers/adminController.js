const res = require("express/lib/response");


class adminController{
    // [GET] Trang chủ admin
    index(req, res, next) {
        res.send('Đây là trang chủ admin');
      }
    

}


module.exports = new adminController();