# Challenge Frontend Mercantil Andina

El objetivo del proyecto es lograr de manera ordenada que el usuario ingrese los datos correspondientes para la solicitud de una cobertura. Mediante cuatro pasos el usuario ira ingresando la información hasta poder enviarla.

El proyecto fue desarrollado con:
- Angular 10
- Bootstrap 5
- Npm Angular Stepper

## Personal Info Component
Este componente es basicamente un formulario para que el usuario pueda incluir sus datos personales. Cada campo posee las validaciones correspondientes al enunciado.

## Vehicle Info Component
Este componente es un formulario de selectores para que el usuario pueda seleccionar los datos correspondientes a su vehículo.

## Ensureaces Selector Component
En este componente se prensentan las coberturas en formato de cards para que el usuario pueda leer los datos correspondiente a cada una y pueda seleccionar la que crea mas conveniente.

## Confirmation Step Component
Este componente se presenta toda la información incorporada por el usuario para que pueda chequear si no hay algun error y confirmar el envío.

## Angular Stepper
Se incorporo la librería [Npm Angular Stepper](https://www.npmjs.com/package/angular-ng-stepper) debido a que bootstrap no tiene un stepper dedicado y era necesario incluir un paso a paso para tener una experiencia de usuario mas satisfactoria.
