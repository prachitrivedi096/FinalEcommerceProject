// const adminCred = {
//     username: 'admin',
//     password: 'admin123'
//   };
  
//   const authenticateAdmin = (req, res, next) => {
//     const { username, password } = req.body;
//     if (username === adminCred.username && password === adminCred.password) {
//       next();
//     } else {
//       res.status(401).json({ message: 'Invalid Credentials' });
//     }
//   };
  
// module.exports = authenticateAdmin;

const adminCred = {
  username: 'admin',
  password: 'admin123'
};

const authenticateAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  let username, password;

  if (authHeader) {
    // Handle Basic Authorization header
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    [username, password] = credentials.split(':');
  } else {
    // Fallback to query parameters or body (GET/POST)
    username = req.query.username || req.body.username;
    password = req.query.password || req.body.password;
  }
  if (username === adminCred.username && password === adminCred.password) {
    return next();
  }

  return res.status(401).json({ message: 'Invalid Credentials' });
};

module.exports = authenticateAdmin;
