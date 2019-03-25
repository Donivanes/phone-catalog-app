import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinners from '../components/Spinners';
import { fetchData } from '../actions/phone';

const mapStateToProps = state => ({ ...state.phone });

class PhoneListContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchData());
  }


  render() {
    const { data } = this.props;
    return (
      <div>
        {data ? <div>{data.map(x => <h1 key={x.id}>{x.id}</h1>)}</div> : <Spinners />}
      </div>
    );
  }
}

export default connect(mapStateToProps)(PhoneListContainer);
