module util {
    export class Router {
        constructor(public map:any) {

        }

        getController():any {
            if(this.map[location.pathname]){
                return new this.map[location.pathname]();
            }
            return null;
        }
    }

    export class GetRouter extends  Router{
        getController():any {
            if(this.map[location.search]){
                return new this.map[location.search]();
            }
            return null;
        }
    }
}
