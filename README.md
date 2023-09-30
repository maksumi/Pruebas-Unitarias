# Pruebas-Unitarias
22 de Septiembre | JS-09 Pruebas Unitarias

# Pruebas Unitarias y Jest en JavaScript

Las pruebas unitarias son un componente esencial del desarrollo de software que consiste en evaluar de forma aislada las partes más pequeñas y fundamentales de un programa, conocidas como "unidades" (generalmente, funciones o métodos), para garantizar que funcionen correctamente. Estas pruebas ayudan a identificar errores y problemas de manera temprana, lo que facilita la corrección y el mantenimiento del código.

## Implementación con Jest en JavaScript

[Jest](https://jestjs.io/) es un popular marco de pruebas unitarias para JavaScript que facilita la creación y ejecución de pruebas unitarias. Aquí hay una guía básica sobre cómo implementar pruebas unitarias con Jest:

1. **Instalar Jest**: Comience por instalar Jest en su proyecto a través de npm o yarn:

   ```bash
   npm install --save-dev jest
   # O
   yarn add --dev jest
   ```

2. **Escribir Pruebas**: Cree archivos de prueba para sus unidades (por ejemplo, `miFuncion.test.js`) y utilice funciones de Jest como `test` y `expect` para escribir sus pruebas. Aquí hay un ejemplo:

   ```javascript
   // miFuncion.js (la unidad que se va a probar)
   function suma(a, b) {
     return a + b;
   }
   
   module.exports = suma;

   // miFuncion.test.js (archivo de prueba)
   const suma = require('./miFuncion');
   
   test('Suma de 2 y 3 es igual a 5', () => {
     expect(suma(2, 3)).toBe(5);
   });
   ```

3. **Ejecutar Pruebas**: Para ejecutar sus pruebas, use el comando de Jest en la línea de comandos:

   ```bash
   npx jest miFuncion.test.js
   ```

   Jest ejecutará las pruebas y proporcionará información sobre si han pasado o fallado.
