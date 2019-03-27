import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinners from '../components/Spinners';
import { fetchData } from '../actions/phone';
import {
  MainContainer, Ul, Li, Img, PhoneContainer, Description, Span, SpanDiv,
} from '../style';

const mapStateToProps = state => ({ ...state.phone });

class PhoneListContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchData());
  }

  render() {
    const { data, status } = this.props;
    return (
      <MainContainer>
        {data ? (
          <Ul>
            {data.map(phone => (
              <Li key={phone.id}>
                <Link to={{ pathname: '/phoneDetail', state: { phone } }}>
                  <PhoneContainer>
                    <Img src={phone.imageUrl} alt={phone.name} />
                    <Description>
                      <h1>{phone.name}</h1>
                      <SpanDiv>
                        {phone.colors.map(color => (
                          <Span key={phone.id + color} color={color} />
                        ))}
                      </SpanDiv>
                    </Description>
                  </PhoneContainer>
                </Link>
              </Li>
            ))}
          </Ul>
        ) : <Spinners status={status} />}
      </MainContainer>
    );
  }
}

PhoneListContainer.defaultProps = {
  data: [],
  dispatch: PropTypes.func,
  status: '',
};

PhoneListContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
  dispatch: PropTypes.func,
  status: PropTypes.string,
};

export default connect(mapStateToProps)(PhoneListContainer);
