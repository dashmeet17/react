import React, { useState,useEffect } from 'react';
import '../css/form.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { transferTrxnAction } from '../redux/actions/transactionActions.js'
import { useActions } from 'react-redux';
import { useDispatch } from 'react-redux';

const Form = (props) => {
  const [amount, setAmount] = useState();
  const [paymentMode, setPaymentMode] = useState('');
  const dispatch = useDispatch();
  const transferTransaction = (trxn) => dispatch(transferTrxnAction(trxn));

  const onChangePaymentMode = (e) => {
    setPaymentMode(e.target.value);
  }

  const onChangeAmount = (e) => {
    console.log("value of amount : "+e.target.value);
    setAmount(e.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    const trxn = {
      paymentMode : paymentMode,
      amount: amount
    };

    /** Call transfer transaction action */
    transferTransaction(trxn);
    alert('Trxn transferred');
  };

  // useEffect(() => {
  //   console.log("Inside use effect");
  // };

    return (
      <div className="container jumbotron  paymentForm">
      <form onSubmit={onSubmit}>

      <div className="row">

      <div className="col-lg-3">
      <div className="btn-group-vertical">
      <button type="button" className="btn btn-secondary buttonGrp trxnButton">USER-A</button>
      <button type="button" className="btn btn-secondary buttonGrp trxnButton">USER-B</button>
      <button type="button" className="btn btn-secondary buttonGrp trxnButton">USER-C</button>
      </div>
      </div>

      <div className="col-lg-3">
      <div>
        <label>
          <input type='radio' name="paymentMode" value={paymentMode} onChange={onChangePaymentMode} required/>
          American Express
        </label>
      </div>

          <div>
            <label>
            <input type='radio' name="paymentMode" value={paymentMode} onChange={onChangePaymentMode} required/>
            VISA
          </label>
          </div>

          <div>
          <label>
          <input type='radio' name="paymentMode" value={paymentMode} onChange={onChangePaymentMode} required/>
          DBS PayLah
          </label>
          </div>
      </div>

          <div className='col-lg-2 padding'>
            <label>
            <input type='number' name="amount" value={amount} max='5000' onChange={onChangeAmount} required/>
            <br/>
            <p className='helpText'>***Maximum Allowed amount is 5000 INR</p>
            </label>
          </div>

          <div className="col-lg-3 padding">
            <input className="button btn btn-primary transferBtn" type='submit' value='Transfer' />
          </div>
      </div>

      <div>
      </div>
      </form>
      </div>
    );
};

const mapStateToProps = (state) => ({
  transactions : state.transactions.data
});


export default Form;
