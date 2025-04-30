import fs from 'fs' 



// 1) Leer archivo con fs
export function leerArchivoComoString(ruta) {
    try {
        return fs.readFileSync(ruta, 'utf8');
    } catch (error) {
        console.error(`Error al leer el archivo: ${error.message}`);
        return null;
    }
}

//2 Escribir texto en un archivo
export function escribirTextoEnArchivo(ruta, texto, flag) {
    const existe = fs.existsSync(ruta);
    
    if (!existe && !flag) {
        throw new Error("El archivo no existe");
    }
    
    fs.writeFileSync(ruta, texto, 'utf8');
}

//3 Transformar un String en un array de numeros
export function transformarStringEnArrayDeNumeros(texto, separador) {
    return texto.split(separador)
                .map(num => Number(num.trim()))
                .filter(num => !isNaN(num));
}

//4 Pasa de un array de n° a uno de string, usando un separador
export function transformarArrayDeNumerosAUnSoloString(array, separador) {
    return array.join(separador);
}

//5 Combinar 2 arrays ordenados ascendentemente, y devuelve uno ordenado tambien de la misma manera.
export function combinarDosArrays(array1, array2) {
    return [...new Set([...array1, ...array2])].sort((a, b) => a - b);
}

//6 Recibe una matriz de numeros y devuelve un unico array ordenandolos ascendentemente.
export function combinarNArrays(arrays) {
    return [...new Set(arrays.flat())].sort((a, b) => a - b);
}


