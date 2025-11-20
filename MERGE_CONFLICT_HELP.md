# Cómo resolver el conflicto en `script.js`

Cuando Git muestra las opciones en VS Code:

- **Accept current change**: Te quedas con lo que ya estaba en tu rama. Es como decir "déjalo como lo tenía yo".
- **Accept incoming change**: Sustituye tu código por el que viene de la otra rama (por ejemplo, de la actualización que intentas traer). Es como decir "quiero lo nuevo que viene".
- **Accept both changes**: Conserva las dos versiones seguidas. Úsalo solo si quieres combinar manualmente después o si las dos partes son compatibles.

## Qué elegir en tu caso
Si el preset debe usar la nueva lógica de `moodPresets`, elige **Accept incoming change** para quedarte con `const moodPresets = { ... }` y que los tiempos de Pomodoro sigan los modos Classic/Productive/Beast. Después verifica que el resto del archivo no tenga más marcadores de conflicto (`<<<<<<<`, `=======`, `>>>>>>>`).

## Pasos rápidos
1. Haz clic en la opción adecuada (en este caso, *Accept incoming change*).
2. Guarda el archivo y revisa que el conflicto desaparezca.
3. Prueba la app para confirmar que el contador usa los tiempos correctos al cambiar de modo.
