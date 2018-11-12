const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log('hash', hash)
    })
})

var hashedPassword = '$2a$10$/OV1QGRDayeTGEWR.83rROlbTAD/FVXWdKfiLnK8zJEm14gjTYggq'

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res)
})

// var data = {
//     id: '1012wws'
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(`token: ${token}`);
//
// var decoded = jwt.verify(token, '123abc')
// console.log('decoded:', decoded);

// var message ='I am user number 33';
// var hash = SHA256(message).toString();
//
//
// console.log(`message: ${message}`);
// console.log(`hash: ${hash}`);
//
// var data =  {
//     id: 4
// };
//
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed, do not trust');
// }