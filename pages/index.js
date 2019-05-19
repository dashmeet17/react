import React from 'react'
import 'react-table/react-table.css'
import '../css/table.css'
import Form from '../components/form'
import Table from '../components/table'
import ReactTable from 'react-table'
import {Provider} from 'react-redux'
import store from '../redux/store'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render () {
    return (
      <Provider store={store}>
        <div>
          <Form/>
          <Table/>
        </div>
      </Provider>
    )
  }
}
