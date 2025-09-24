// Definición del módulo Angular
var app = angular.module("landingApp", []);

// Controlador principal
app.controller("MainController", function($scope) {
  $scope.mensajePrincipal = "Haz crecer tu negocio al siguiente nivel";
  $scope.descripcion = "Este proyecto ayuda a empresas medianas a aumentar clientes, mejorar presencia digital y optimizar ventas online.";
  $scope.beneficio = "Beneficios: mayor alcance en redes sociales, captación de nuevos clientes y crecimiento sostenible.";
  
  $scope.mostrarTexto = false;

  $scope.mostrarBeneficio = function() {
    $scope.mostrarTexto = !$scope.mostrarTexto;
  };
});