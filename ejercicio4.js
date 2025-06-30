const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

// 4.1 - Mostrar "Tendo" por consola
console.log(aldeanos[3]);

// 4.2 - Colocar "Cervasio" al final (posición 5 manualmente)
aldeanos[5] = "Cervasio";
console.log(aldeanos);

// 4.3 - Cambiar el primer elemento por "Bambina"
aldeanos[0] = "Bambina";
console.log(aldeanos);

// 4.4 - Darle la vuelta manualmente
const alReves = [
  aldeanos[5],
  aldeanos[4],
  aldeanos[3],
  aldeanos[2],
  aldeanos[1],
  aldeanos[0]
];
console.log(alReves);

// 4.5 - Cambiar "Narciso" por "Canela" (sabemos que está en la posición 1)
aldeanos[1] = "Canela";
console.log(aldeanos);

// 4.6 - Imprimir el último elemento sin usar posición directa
const ultimaPos = aldeanos.length - 1;
console.log(aldeanos[ultimaPos]);

