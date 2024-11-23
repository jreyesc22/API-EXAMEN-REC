const env ={

database: 'db21_200_reyescan', //nombre de la base de datos
username:'db21_200_reyescan_user', //nombre de usuario
password:'ilhN3VsmD5NLXy16pYlwV66kaWp8SVvr', //contrase para acceso a la base de datos
host: 'dpg-ct0u98e8ii6s73fac9s0-a.oregon-postgres.render.com', //	nombre del host del servidor de la base de datos
dialect:'postgres', //	el dialecto de la base de datos
pool:{
max: 5,// numero maximo de conexiones
min: 0, //numero minio de conexion en el pool
acquire:30000,// tiempo maximo en ms para intentar una conexion antes de marcar el error 
idle: 10000// tiempo maximo para intentar una conexion des pues de estar inactiva para ser liberada


}


};

module.exports =env;