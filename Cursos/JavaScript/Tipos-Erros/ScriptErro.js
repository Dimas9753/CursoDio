function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Digite os parametros!");
        if (typeof arr !== 'object') throw new TypeError("Array não é tipo objeto!");
        if (typeof num !== 'number') throw new TypeError("Numero não é tipo numero!");
        if (arr.length !== num) throw new RangeError("Qtd de objetos diferente de numeros!");
        return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Erro de ReferenceError")
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log("Erro de TypeError")
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log("Erro de RangeError")
            console.log(e.message)
        } else {
            (e instanceof RangeError);{
                console.log("Erro Inesperado!!!")
            }
        }
    }
}

console.log(validaArray([1,2],2));