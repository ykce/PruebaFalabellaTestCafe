@tag
Feature: Consulta estado documento
  yo quiero consultar el estado del documento

 @tag1
  Scenario Outline: consultar estado documento
    Given el usuario está en la página de consulta del registro civil
    When el usuario ingresa el "<run>" y "<tipo documento>"
    And presiona Aceptar
    Then visualiza el resultado de la consulta 
    

 Examples: 
      | run        | tipo documento             |                                                                    
      |14129217-K  |Cédula de identidad chilena |
   