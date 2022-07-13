import validator from 'validator';
import { Configuracion } from '../modelos/configuracion';

export function validarConfiguracion(conf: Configuracion): string {
    
   if(!validator.isIP(conf.databaseHost)) {
    return 'El host de la bas de datos no tiene un formato correcto';

   }

/*
conf.archivosHabilitados = false conf.databaseHabilitado = false --> ERROR
conf.archivosHabilitados = false conf.databaseHabilitado = true --> OK
conf.archivosHabilitados = true conf.databaseHabilitado = false --> OK
conf.archivosHabilitados = true conf.databaseHabilitado = true --> ERROR

*/

if((!conf.archivosHabilitado) && (!conf.databaseHabilitado)){
    return 'Ningún sistema de almacenamiento seleccionado';
}
    

if((conf.archivosHabilitado) && (conf.databaseHabilitado)){
    return 'Dos sistemas de almacenamiento no permitido';
}

// el archivo de configuración ha pasado toda la validación (todo OK)
   return null;
   
}