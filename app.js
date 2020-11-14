const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
//This is used to avoid errors when connected to client because they are running on different ports
const cors = require("cors")
const expressValidator = require("express-validator")
require('dotenv').config()

// app
const app = express()

//db connection
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true,
    useUnifiedTopology: true}
)
    .then(() => console.log("DB Connected"))

mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`)
})

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())
app.use(cors())

//import routes
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const marcaAutoRoutes = require("./routes/marcaAuto")
const modelAutoRoutes = require("./routes/modelAuto")
const tipPieseAutoRoutes = require("./routes/tipPieseAuto")
const subtipPieseAutoRoutes = require("./routes/subtipPieseAuto")
const amortizoareRoutes = require("./routes/subtipuriPieseAuto/amortizoare")
const motorRoutes = require("./routes/subtipuriPieseAuto/motor")
const filtreRoutes = require("./routes/subtipuriPieseAuto/filtre")
const distribuitoriRoutes = require("./routes/distribuitori")
const braintreeRoutes = require("./routes/braintree")
const orderRoutes = require("./routes/order")


//routes middleware
app.use("/api", authRoutes)
app.use("/api", userRoutes)
app.use("/api", marcaAutoRoutes)
app.use("/api", modelAutoRoutes)
app.use("/api", tipPieseAutoRoutes)
app.use("/api", subtipPieseAutoRoutes)
app.use("/api", amortizoareRoutes)
app.use("/api", motorRoutes)
app.use("/api", filtreRoutes)
app.use("/api", distribuitoriRoutes)
app.use("/api", braintreeRoutes)
app.use("/api", orderRoutes)

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Listening to port: ${port}`))