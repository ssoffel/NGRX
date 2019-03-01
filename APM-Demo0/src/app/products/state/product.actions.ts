import { Action } from '@ngrx/store';
import { Product } from '../product';
 

export enum ProductActionTypes {
    ToggleProductCode = '[Product] Toggle Product Code',
    SetCurrentProduct = '[Product] Set Current Product',
    ClearCurrentProduct = '[Product] Clear Current Product',
    GetAllProducts = '[Product] Get All Products',
    InitializeCurrentProduct = '[Product] Initialize Current Product',
    Load = '[Product] Load',
    LoadSuccess = '[Product] Load Sucess',
    LoadFail = '[Product] Load Fail'
    

}

export class ToggleProductCode implements Action {
    readonly type = ProductActionTypes.ToggleProductCode;

    public payload: boolean;

    constructor(payload: boolean) {
        this.payload = payload;
    }
}

export class SetCurrentProduct implements Action {
    readonly type = ProductActionTypes.SetCurrentProduct;

    public payload: Product;

    constructor(payload: Product) {
        this.payload = payload;
    }
}

export class ClearCurrentProduct implements Action {
    readonly type = ProductActionTypes.ClearCurrentProduct;

    public payload: null;

    constructor() {
        this.payload = null;
    }
}

export class GetAllProducts implements Action {
    readonly type = ProductActionTypes.GetAllProducts ;

    public payload: Product[];

    constructor(payload: Product[]) {
        this.payload = payload;
    }
}

export class InitializeCurrentProduct  implements Action {
    readonly type = ProductActionTypes.InitializeCurrentProduct;

    
}

export class Load implements Action {
    readonly type = ProductActionTypes.Load ;
}

export class LoadSuccess implements Action {
    readonly type = ProductActionTypes.LoadSuccess ;

    public payload: Product[];

    constructor(payload: Product[]) {
        this.payload = payload;
    }
}

export class LoadFail implements Action {
    readonly type = ProductActionTypes.LoadFail ;

    public payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }
}

 





export type ProductActions = ToggleProductCode | SetCurrentProduct | GetAllProducts | ClearCurrentProduct | InitializeCurrentProduct |
   Load | LoadFail | LoadSuccess;
 