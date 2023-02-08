const mongoose = require('mongoose');

//creating database
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://pritam:pritam901@cluster0.gqst7xz.mongodb.net/Ecomm?retryWrites=true&w=majority" , {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})