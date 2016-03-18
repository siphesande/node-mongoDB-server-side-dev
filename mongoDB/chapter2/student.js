var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: { type: String, required: true },
  courses: [{ type: String, ref: 'Course' }]
});

/* Returns the student's first name, which we will define
 * to be everything up to the first space in the student's name.
 * For instance, "William Bruce Bailey" -> "William" */
schema.virtual('firstName').get(function() {
	return this.name.split(' ')[0]
});

// schema.virtual('firstName').get(function() {
//     var firstname = this.name.split(" ");
//     console.log(firstname);
//     return 'William';
// });
 
// schema.virtual('firstName').get(function() {
//   return 'Not Implemented!';
// });

/* Returns the student's last name, which we will define
 * to be everything after the last space in the student's name.
 * For instance, "William Bruce Bailey" -> "Bailey" */
 schema.virtual('lastName').get(function() {
	var split = this.name.split(' ')
	return split[split.length-1]
});
// schema.virtual('lastName').get(function() {
//     var lastname = this.name.split(" ");
//     console.log(lastname);
//     return 'Rose';
// });


// schema.virtual('lastName').get(function() {
//   return 'Not Implemented!';
// });

module.exports = schema;
