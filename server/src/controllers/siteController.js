const res = require("express/lib/response");

const { mutipleMongooseToObject } = require('../util/mongoose');

class SiteController {
  //[GET] /
  //Trang chủ chuyển nội dung phim, thể loại, quốc gia.
  index(req, res, next) {
    res.send('hello world');
  }

}

module.exports = new SiteController();
