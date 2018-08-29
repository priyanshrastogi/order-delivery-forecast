import _ from 'lodash';
import { FETCH_ORDERS } from '../actions';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_ORDERS:
            return _.mapKeys(action.payload, '_id');

        default:
            return state;
    }
}