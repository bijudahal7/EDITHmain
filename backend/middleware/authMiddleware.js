import jwt from 'jsonwebtoken';

export const authenticateUser = (req, res, next)=> {
    // Retrieve the access token from the cookie
 
    const accessToken = req.cookies.accessToken;
    console.log(accessToken);
    // Check if the access token is present
    if (!accessToken) {
      return res.status(401).json({ error: 'Unauthorized: Access token missing' });
    }
  
    try {
      // Verify the access token
      const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        
      // Attach the decoded user information to the request for further use
      req.user = decoded;
  
      // Continue with the next middleware or route handler
      next();
    } catch (error) {
      // If token verification fails, return unauthorized error
      return res.status(401).json({ error: 'Unauthorized: Invalid access token' });
    }
  }
  
  