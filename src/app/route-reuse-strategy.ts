import { ActivatedRouteSnapshot, RouteReuseStrategy, DetachedRouteHandle } from '@angular/router';
import { Provider } from "@angular/core/core";

export class RouteReuseSameStrategy implements RouteReuseStrategy {
    // from default route strategy, as it can't be inherited...
    shouldDetach(route: ActivatedRouteSnapshot): boolean { return false; }
    store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {}
    shouldAttach(route: ActivatedRouteSnapshot): boolean { return false; }
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle|null { return null; }
    super_shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
      return future.routeConfig === curr.routeConfig;
    }

    
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
      let isSame = future.component == curr.component;
    // let name = future.component && (<any>future.component).name;
    return isSame || this.super_shouldReuseRoute(future, curr);// && name !== 'DetailSameComponent';
  }
}

export const RouteReuseProvider: Provider = {
    provide: RouteReuseStrategy,
    useClass: RouteReuseSameStrategy
}