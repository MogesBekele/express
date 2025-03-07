import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";


const PORT = 3000;
const app = express();
app.use(cookieParser());
app.use(session( {
  secret: "mysecretkey",
  resave: false,
  saveUninitialized: false,
  //cookie: { secure: false }  // Set secure to false for development environment. In production, set secure to true.  // This will make the cookie accessible only over HTTP (not HTTPS)
}))

app.get('/visit', (req,res)=>{
  if (req.session.page_views) {
    req.session.page_views++;
 res.send(`you visited this page ${req.session.page_views}`)
    
  }else{
    req.session.page_views = 1;
    res.send("Welcome to this page for the first time!");
  }
})


app.get("/", (req, res) => {
 
  res.send("Hello, World!");
});




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
