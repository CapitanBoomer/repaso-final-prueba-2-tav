export interface Registrodatos {
firstName:string,
lastName:string,
age:number,
username:string,
password:string,
birthDate:string,
gender:'male'|'female',

}
export interface Idusuaario extends Registrodatos{
  id:string
}
