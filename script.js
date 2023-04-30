const arrayINE={
    apPaterno:"JIMENEZ",
    apMaterno: "BELTRAN",
    nombres:"ANGEL ELI",
    sexo:"M",
    domicilio:"C PASEO DE AMAPOLAS M35 L1 N3",
    domicilio2:"FRACCIONAMIENTO VILLAS DEL MAR PLUS SM 249 77715",
    domicilio3:"BENITO JUAREZ Q ROO",
    claveLector:"QWERTYUIOP12345678",
    CURP:"JIBA041115HVZMLNA7",
    registro:"202 00",
    fechaNacimiento: "2004 11 15",
    seccion:"1114",
    vigencia: "2022 2032",
};

let apPaterno = arrayINE.apPaterno;
let apMaterno = arrayINE.apMaterno;
let nombres = arrayINE.nombres;
let sexo = arrayINE.sexo;
let domicilio = arrayINE.domicilio;
let domicilio2 = arrayINE.domicilio2;
let domicilio3= arrayINE.domicilio3;
let claveLector = arrayINE.claveLector;
const CURP = arrayINE.CURP;
let registro = arrayINE.registro;
let fechaNacimiento = arrayINE.fechaNacimiento;
let seccion = arrayINE.seccion;
let vigencia = arrayINE.vigencia;

document.getElementById("apPaterno") .innerHTML = apPaterno;
document.getElementById("apMaterno") .innerHTML = apMaterno;
document.getElementById("nombres") .innerHTML = nombres;
document.getElementById("sexo") .innerHTML = sexo;
document.getElementById("domicilio") .innerHTML = domicilio;
document.getElementById("domicilio2") .innerHTML = domicilio2;
document.getElementById("domicilio3") .innerHTML = domicilio3;
document.getElementById("claveLector") .innerHTML = claveLector;
document.getElementById("CURP") .innerHTML = CURP;
document.getElementById("registro") .innerHTML = registro;
document.getElementById("fechaNacimiento") .innerHTML = fechaNacimiento;
document.getElementById("seccion") .innerHTML = seccion;
document.getElementById("vigencia") .innerHTML = vigencia;
