const name = "Andrés Fernández";
const isVegan = false;

console.log(`Su numbre es ${name} y su veganismo es ${isVegan}`);


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

const getRandomInt = (tope) => Math.floor(Math.random() * tope)
console.log("Este random int es", getRandomInt(50));

const matematicas = () => {
    const suma = [getRandomInt(50), getRandomInt(50)]
    console.log(`la suma de ${suma[0]} y ${suma[1]} es igual a ${suma[0] + suma[1]}`);

    const resta = [getRandomInt(50), getRandomInt(50)]
    console.log(`la resta de ${resta[0]} menos ${resta[1]} es igual a ${resta[0] - resta[1]}`);

    const multi = [getRandomInt(5), getRandomInt(5)]
    console.log(`la multiplicacion de ${multi[0]} por ${multi[1]} es igual a ${multi[0] * multi[1]}`);

    const division = [getRandomInt(7), getRandomInt(7)]
    console.log(`la división de ${division[0]} entre ${division[1]} es igual a ${division[0] / division[1]}`);

}

matematicas()