import {User} from '../modules/user_modules.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
export const userLogin = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Please provide valid email and password." });
    }
    try {
        console.log(email, password);
        const existingUser = await User.findOne({ email });
        console.log(existingUser);
      if (!existingUser) {
        return res
          .status(400)
          .json({ error: "No user found with this email." });
      }
      
  
      const isPasswordMatch = await bcrypt.compare(
        password,
        existingUser.password
      );
  
      if (!isPasswordMatch) {
        return res
          .status(400)
          .json({ error: "Invalid credentials." });
      }
      const user = {
        userId: existingUser._id,
        username: existingUser.username,
        email: existingUser.email
      }

      const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET);

      return res
        .status(200).cookie("accessToken",accessToken,{
            httpOnly: true,
            secure: true,
            sameSite: true, // Restrict cookie to same-site requests
        

        })
        .json({ message: "Successfully logged in", accessToken, user });
    } catch (error) {
      console.error("Login error:", error);
      return res
        .status(500)
        .json({ error: "Something went wrong while logging in user." });
  }
  };
  export const userRegister = async (req, res) => {
    const { f_name, l_name, phone, email, password, c_password } = req.body;
    console.log(req.body);
    try {
      if (!f_name || !email || !password || !l_name || !phone || !c_password) {
        return res.status(401).json({
          error: "All fields are mandatory.",
        });
      }
     
  
      // Check for password match
      if (password !== c_password) {
        return res.status(400).json({ error: "Passwords do not match." });
      }
  
      // Check for existing user by email or phone number
      const existingUser = await User.findOne({ email });
 
      if (existingUser) {
        return res
          .status(400)
          .json({ error: "Email address is already registered." });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      
      const user = await User.create ({
    
        email,
        password: hashedPassword,
        f_name,
        l_name,
        phone,
      }).then (()=>{
        console.log("ok");
      })
       .catch(err => {
        console.log(err);
       });
      return res
        .status(200)
        .json({ message: "User registered successfully"  });
    } catch (error) {
      console.error("Registration error:", error);
      return res
        .status(500)
        .json({ error: "Something went wrong while registering user." });
    }
  };
  
