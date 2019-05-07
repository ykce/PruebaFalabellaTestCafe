Feature: Consulta Sucursales

Scenario: Tottus Nataniel
Given el usuario está en el buscador de google "buscador"
When el usuario ingresa los criterios de busqueda "tottus sucursales"
When presiona enter 
Y	selecciona sucursal "Nataniel"
Y  selecciona opción recetas "recetas y mas"
Y selecciona dificultad "dificultad"
Y selecciona receta "corona de Rollitos de canela"
Then verificar que la receta contenga "canela" y "Azúcar rubia"

