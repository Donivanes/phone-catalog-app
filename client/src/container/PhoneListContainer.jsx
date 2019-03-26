import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinners from '../components/Spinners';
import { fetchData } from '../actions/phone';
import {
  MainContainer, Ul, Li, Img, PhoneContainer, A,
} from '../style';

const mapStateToProps = state => ({ ...state.phone });

class PhoneListContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchData());
  }


  render() {
    const { data } = this.props;
    return (
      <MainContainer>
        {data ? (
          <Ul>
            {data.map(phone => (
              <Li key={phone.id}>
                <A href="/home">
                  <PhoneContainer>
                    <Img src={phone.imageUrl} alt={phone.name} />
                    <div>
                      <h1>{phone.name}</h1>
                      <h1>asdfads</h1>
                    </div>
                  </PhoneContainer>
                </A>
              </Li>
            ))}
          </Ul>
        ) : <Spinners />}
      </MainContainer>
    );
  }
}

PhoneListContainer.defaultProps = {
  data: [],
  dispatch: PropTypes.func,
};

PhoneListContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(PhoneListContainer);
