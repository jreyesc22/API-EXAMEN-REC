const env ={

database: '', //nombre de la base de datos
username:'', //nombre de usuario
password:'', //contrase para acceso a la base de datos
host: '', //	nombre del host del servidor de la base de datos
dialect:'', //	el dialecto de la base de datos
pool:{
max: 5,// numero maximo de conexiones
min: 0, //numero minio de conexion en el pool
acquire:30000,// tiempo maximo en ms para intentar una conexion antes de marcar el error 
idle: 10000// tiempo maximo para intentar una conexion des pues de estar inactiva para ser liberada


}


};

module.exports =env;