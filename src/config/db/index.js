const mongoose = require('mongoose');
async function connect(){
try{
     await mongoose.connect('mongodb://127.0.0.1:27017/Blog',{
        
        useNewUrlParser: true,
        useUnifiedTopology: true
});
console.log('connect successfully')
} catch(error){
    console.log('connect failure')
}
}
mongoose.set('strictQuery', false)
module.exports ={connect};
