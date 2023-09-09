
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

console.log(alumno.nombre);