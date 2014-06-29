var controllers;
(function (controllers) {
    var IndexController = (function () {
        function IndexController() {
        }
        IndexController.prototype.showAlert = function () {
            alert("IndexController");
        };
        return IndexController;
    })();
    controllers.IndexController = IndexController;

    var Sample1Controller = (function () {
        function Sample1Controller() {
        }
        Sample1Controller.prototype.showAlert = function () {
            alert("Sample1Controller");
        };
        return Sample1Controller;
    })();
    controllers.Sample1Controller = Sample1Controller;

    var Sample2Controller = (function () {
        function Sample2Controller() {
        }
        Sample2Controller.prototype.showAlert = function () {
            alert("Sample2Controller");
        };
        return Sample2Controller;
    })();
    controllers.Sample2Controller = Sample2Controller;
})(controllers || (controllers = {}));
