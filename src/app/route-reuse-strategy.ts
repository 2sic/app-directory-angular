import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';
import { Provider } from '@angular/core/core';

/**
 * This is a Routing-Strategy - it's the same as the default in Angular
 * except that it will not re-create the component if a different route still points to the same component
 */
export class RouteReuseSameStrategy implements RouteReuseStrategy {
    // from default route strategy, as it can't be inherited...
    shouldDetach(route: ActivatedRouteSnapshot): boolean { return false; }
    store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {}
    shouldAttach(route: ActivatedRouteSnapshot): boolean { return false; }
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle|null { return null; }

    /**
     * the original version, as used inside Angular
     */
    private super_shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
      return future.routeConfig === curr.routeConfig;
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
      const isSameComponent = future.component === curr.component;
      return isSameComponent || this.super_shouldReuseRoute(future, curr);
  }
}

export const RouteReuseProvider: Provider = {
    provide: RouteReuseStrategy,
    useClass: RouteReuseSameStrategy
};
