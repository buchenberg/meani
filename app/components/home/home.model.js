// app/components/home/home.model.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our home model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Home', {
    name : {type : String, default: ''}
});