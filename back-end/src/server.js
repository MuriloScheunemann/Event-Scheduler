require("express-async-errors")
const AppError = require('./utils/AppError')
const express = require("express")
const routes = require("./routes/")
const app = express();
const migrationsRun = require("./database/sqlite/migrations")

app.use(express.json())

app.use(routes);

migrationsRun();

//!  Error Treatment
app.use((error, request, response, next) => {
    if(error instanceof AppError){          //!Client side error
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }
    return response.status(500).json({  //!Server side error
        status: "error",
        message: "Internal Server Error"
    })

})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))