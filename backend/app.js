const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); 
const connectDB = require('./config/db'); 
const userRouters = require('./routers/userRouters');

dotenv.config();

connectDB();

const app = express();


app.use(cors({
  origin: ['http://localhost:5501',' https://3953-176-29-18-140.ngrok-free.app '], 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));




app.use(express.json());

app.use('/api', userRouters);


// دالة للتحقق من التوكن
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');  // استخراج التوكن من الهيدر
    if (!token) {
      return res.status(401).json({ message: "Access Denied: No token provided" });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);  // التحقق من التوكن باستخدام JWT_SECRET
      req.user = decoded;  // حفظ بيانات المستخدم في `req.user`
      next();  // إذا كان التوكن صالحًا، استمر في المسار التالي
    } catch (error) {
      res.status(400).json({ message: "Invalid token" });
    }
  };
  
  
// ✅ تسجيل مستخدم عبر جوجل
app.post("/signup/google", async (req, res) => {
    try {
      const { username, email, role } = req.body;
      console.log("Received Google signup data:", { username, email, role });
  
      if (!username || !email || !role) {
        return res.status(400).json({ message: "Missing required fields" });
      }
  
      let user = await User.findOne({ email });
      if (user) {
        // إذا كان المستخدم موجودًا، أصدر توكن بدلاً من إرجاع "User already exists"
        const token = jwt.sign(
          { userId: user._id, email: user.email, role: user.role },
          process.env.JWT_SECRET,
          { expiresIn: "2h" }
        );
        return res.status(200).json({
          message: "User already exists",
          token,
          user: {
            username: user.username,
            email: user.email,
            role: user.role,
          },
        });
      }
  
      user = new User({
        username,
        email,
        password: null,
        role,
      });
  
      await user.save();
      console.log("User saved successfully:", user);
  
      // إصدار توكن بعد التسجيل
      const token = jwt.sign(
        { userId: user._id, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "2h" }
      );
  
      res.status(201).json({
        message: "Google signup successful",
        token,
        user: {
          username: user.username,
          email: user.email,
          role: user.role,
        },
      });
    } catch (error) {
      console.error("Google Signup Error:", error.message);
      res.status(500).json({ message: "Server error" });
    }
  });
  
  // ✅ Endpoint محمي (مثال)
  app.get("/protected", verifyToken, (req, res) => {
    res.status(200).json({
      message: "Access granted",
      user: {
        userId: req.user.userId,
        email: req.user.email,
        role: req.user.role,
      },
    });
  });
  const jwt = require('jsonwebtoken');



const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

console.log("Mongo URI:", process.env.MONGO_URI);