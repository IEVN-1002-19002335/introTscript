
interface Alumno{
    matricula?:number;
    nombre:string;
    email:string;
}
//?opcional
const alumno:Alumno={
    nombre: 'juan',
    email: 'juans@gmail.com',

}

console.table(alumno);

let mascotas:string[]=['perro','gato', 'perico']

mascotas[1]='perico verde';
mascotas.push('gato dos');
console.table(mascotas);

let tem:(string|number)[]=[];
tem.push('RCR');
tem.push(23);