import { FETCH_TRANSACTIONS, TRANSFER_TRANSACTIONS} from '../actions/types';

const initialState = {
  data : []
}

export default function(state = initialState, action) {

  switch(action.type) {
    case FETCH_TRANSACTIONS :
      console.log('FETCH_TRANSACTIONS inside reducer called');
      return {
        ...state,
        data : action.payload
      };
    default :
     return state;
  }

}
