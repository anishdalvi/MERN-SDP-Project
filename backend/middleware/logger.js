module.exports = (req, res, next) => {
    res.on('finish', () => {
      console.log('Request Log :', req.method, res.statusCode, req.url)
    })
    next()
  }
  