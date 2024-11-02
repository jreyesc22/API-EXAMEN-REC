const env ={

database: 'examen_final_dw', //nombre de la base de datos
username:'examen_final_dw_user', //nombre de usuario
password:'wjNQm8WaJp9l7Xlt47w4Cq3ApHPPvVSe', //contrase para acceso a la base de datos
host: 'dpg-csj64523esus7380ubj0-a/examen_final_dw', //	nombre del host del servidor de la base de datos
dialect:'postgres', //	el dialecto de la base de datos
pool:{
max: 5,// numero maximo de conexiones
min: 0, //numero minio de conexion en el pool
acquire:30000,// tiempo maximo en ms para intentar una conexion antes de marcar el error 
idle: 10000// tiempo maximo para intentar una conexion des pues de estar inactiva para ser liberada


}


};

module.exports =env;