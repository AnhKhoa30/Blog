const newRouter = require('./news')
const meRouter = require('./me')
const courseRouter = require('./course')
const loginRouter = require('./login')
const siteRouter = require('./site')


function route(app){
  app.use('/news',newRouter);
  app.use('/me',meRouter);
  app.use('/course',courseRouter);
  app.use('/',loginRouter);
  app.use('/',siteRouter);
     
}

module.exports = route;