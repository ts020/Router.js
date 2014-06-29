var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var util;
(function (util) {
    var Router = (function () {
        function Router(map) {
            this.map = map;
        }
        Router.prototype.getController = function () {
            if (this.map[location.pathname]) {
                return new this.map[location.pathname]();
            }
            return null;
        };
        return Router;
    })();
    util.Router = Router;

    var GetRouter = (function (_super) {
        __extends(GetRouter, _super);
        function GetRouter() {
            _super.apply(this, arguments);
        }
        GetRouter.prototype.getController = function () {
            if (this.map[location.search]) {
                return new this.map[location.search]();
            }
            return null;
        };
        return GetRouter;
    })(Router);
    util.GetRouter = GetRouter;
})(util || (util = {}));
