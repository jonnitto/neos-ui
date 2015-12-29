import {ActionTypes} from '../../Constants/';
import Immutable from 'immutable';

export default {
    [ActionTypes.Transient.CHANGE_ADD](state, action) {
        console.log(action.change);
        return state.set('changes', state.get('changes').push(action.change));
    },

    [ActionTypes.Transient.CHANGES_CLEAR](state) {
        return state.set('changes', Immutable.fromJS([]));
    }
};
