const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const deliveryRoutes = require('./routes/deliveryRoutes');
const productRoutes = require('./routes/products');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


connectDB();


app.use("/", require("./routes/auth"));
app.use('/api', deliveryRoutes);

app.use('/products', productRoutes);




app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});



