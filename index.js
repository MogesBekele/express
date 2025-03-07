import express from "express";
import cookieParser from "cookie-parser";



const app = express();
app.use(cookieParser())




const PORT = 3000;


app.get('/', (req,res)=>{
  res.send('Hello, World!')
   // Cookies that have not been signed
   console.log('Cookies: ', req.cookies)

   // Cookies that have been signed
   console.log('Signed Cookies: ', req.signedCookies)
})






app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
