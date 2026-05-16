require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/database/index");

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    // Only listen if not running on Vercel
    if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
      app.listen(PORT, () => {
        console.log(`⚙️ Server is running at port : ${PORT}`);
      });
    }
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });

module.exports = app;
