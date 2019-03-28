import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { lifecycle } from 'recompose';
import Spinners from '../components/Spinners';
import { fetchData } from '../actions/phone';
import {
  MainContainer, Ul, Li, Img, PhoneContainer, Description, Span, SpanDiv,
} from '../style';


const PhoneList = ({ data, status }) => (
  <MainContainer>
    {data ? (
      <Ul>
        {data.map(phone => (
          <Li key={phone.id}>
            <Link to={{ pathname: '/phoneDetail', state: { phone } }} style={{ textDecoration: 'none' }}>
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


const PhoneListContainer = lifecycle({
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchData());
  },
})(PhoneList);

PhoneList.defaultProps = {
  data: [],
  status: '',
};

PhoneList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
  status: PropTypes.string,
};

const mapStateToProps = state => ({ ...state.phone });
export default connect(mapStateToProps)(PhoneListContainer);
