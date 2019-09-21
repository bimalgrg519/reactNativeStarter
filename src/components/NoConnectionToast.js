import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import { connect } from 'react-redux';
import MyText from './MyText';

const App = () => {
  const [opacity, setOpacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
    }).start();

    setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 200,
      }).start();
    }, 2800);
  }, []);

  return (
    <Animated.View
      style={{
        padding: 10,
        backgroundColor: '#666666',
        position: 'absolute',
        width: '100%',
        bottom: 0,
        opacity,
      }}
    >
      <MyText text="No connection error." style={{ color: '#ffffff' }} />
    </Animated.View>
  );
};

const NoConnectionToast = ({ showNoConnectionToast, dispatchNoConnectionToast }) => {
  useEffect(() => {
    if (showNoConnectionToast) {
      setTimeout(() => {
        dispatchNoConnectionToast();
      }, 3000);
    }
  });

  if (showNoConnectionToast) {
    return <App />;
  }
  return null;
};

const mapStateToProps = state => ({
  showNoConnectionToast: state.showNoConnectionToast,
});

const mpaDispatchToProps = dispatch => ({
  dispatchNoConnectionToast: () => {
    dispatch({ type: 'NO_CONNECTION_TOAST', payload: false });
  },
});

export default connect(
  mapStateToProps,
  mpaDispatchToProps
)(NoConnectionToast);
