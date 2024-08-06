const adminCred = {
    username: 'admin',
    password: 'admin123'
  };
  
  const authenticateAdmin = (req, res, next) => {
    const { username, password } = req.body;
    if (username === adminCred.username && password === adminCred.password) {
      next();
    } else {
      res.status(401).json({ message: 'Invalid Credentials' });
    }
  };
  
module.exports = authenticateAdmin;