
const usuarios = new Map();

usuarios.set('Luiz','Admin');
usuarios.set('Stephany','Admin');
usuarios.set('Jorge','User');
usuarios.set('Natalia','Admin');

function getAdmins(map) {
    let admins = [];
    for ([key, value] of map){
       if (value === 'Admin') {
           admins.push(key);
       }
    }
    return admins;
}

console.log(getAdmins(usuarios));

const Array = [30,30,40,5,223,2049,3034,5];
function valorresUnicos(arr){
    const mySet = new Set(arr);
    return [...mySet];
}

console.log(valorresUnicos(Array));