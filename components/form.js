import React from 'react'
import '../css/form.css'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      review: '',
      rating: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (key, event) {
    this.setState({[key]: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.handleFormSubmit(this.state)
  }

  render () {
    return (
      <div className="container jumbotron  paymentForm">
      <form onSubmit={this.handleSubmit}>

      <div className="row">

      <div className="col-lg-3">
      <div className="btn-group-vertical">
      <button type="button" class="btn btn-secondary buttonGrp trxnButton">USER-A</button>
      <button type="button" class="btn btn-secondary buttonGrp trxnButton">USER-B</button>
      <button type="button" class="btn btn-secondary buttonGrp trxnButton">USER-C</button>
      </div>
      </div>

      <div className="col-lg-3">
      <div>
        <label>
          <input type='radio' name="paymentMode" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} required/>
          American Express
        </label>
      </div>

          <div>
            <label>
            <input type='radio' name="paymentMode" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} required/>
            VISA
          </label>
          </div>

          <div>
          <label>
          <input type='radio' name="paymentMode" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} required/>
          DBS PayLah
          </label>
          </div>
      </div>

          <div className='col-lg-2 padding'>
            <label>
            <input type='number' name="amount" value={this.state.name} max='5000' onChange={this.handleChange.bind(this, 'name')} required/>
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
    )
  }
}
