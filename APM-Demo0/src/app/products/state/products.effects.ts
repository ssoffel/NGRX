import { Injectable } from '@angular/core';
import { ProductService } from '../product.service';
import { Actions, Effect , ofType} from '@ngrx/effects';
import { ProductActionTypes, LoadSuccess, LoadFail, Create } from './product.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Product } from '../product';
import { of } from 'rxjs';


@Injectable()
export class ProductEffects {
    constructor(private productService: ProductService,
                        private actions$: Actions) {

    }

    @Effect()
    loadProducts$ = this.actions$.pipe(
       ofType(ProductActionTypes.Load),
       mergeMap(action => this.productService.getProducts().pipe(
            map((products: Product[]) => (new LoadSuccess(products))),
            catchError(err => of(new LoadFail(err)))
        ))
    )

    
}