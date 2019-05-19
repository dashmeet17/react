import { FETCH_TRANSACTIONS, TRANSFER_TRANSACTIONS} from './types';
import axios from 'axios'

export const fetchTransactions = () => dispatch => {
   console.log('fetching transactions');
    axios.get(`http://localhost:8080/customer-transactions`)
        .then(res => {
          debugger;
          const trxns = res.data;
          console.log(trxns)
          //self.setState({data: trxns});
          dispatch({
            type : FETCH_TRANSACTIONS,
            payload : trxns
          })

        }).catch(function (error) {
          console.log(error);
        });
}
