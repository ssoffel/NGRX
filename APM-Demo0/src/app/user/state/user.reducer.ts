import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface UserState {
    showUserName: boolean;
}

const initialState: UserState = {
    showUserName: true
};

const getProductFeatureState = createFeatureSelector<UserState>('user')

export const getShowUserName = createSelector(
    getProductFeatureState,
    state => state.showUserName
)

export function reducer(state= initialState, action): UserState {
    switch(action.type) {

        case 'TOGGLE_MASK_USERNAME':
        console.log('existing state: ' + JSON.stringify(state));
        console.log('payload: ' + action.payload)
         return {
                ...state,
                showUserName: action.type
        };
        
        default:
        return state;
        
    }
}