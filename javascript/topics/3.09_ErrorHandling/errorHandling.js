let wifi = false;
let obj = {
    val: 5
};
let arr = ['haha', 'lol', 'omg'];
let classRoom = 'Babylon';
console.log('Hi there i am about to change the password');

try{
    wifi = true;
    throw 'SOMETHINGG'
} catch(error){
    console.log('EROOR ORROEOR ROERR')
}


changePassword = (target, pass) => {
    console.log(`I have change the password to ${pass}`);
}

wifi = false;
changePassword(classRoom, 'SUPER_SECRET')