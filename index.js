const name = "Andrés Fernández";
const isVegan = false;

const incrementar = (tope) => {
    let output = 0;
    while (output < tope) {
        output++
        console.log("edad es", output);
    }
    return output
}

const age = incrementar(20)

const isAdult = () => {
    return (age > 18) ?
        true
        :
        false
}
console.log("es mayor de edad?", isAdult());