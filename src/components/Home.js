import React from 'react';

import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {
    increment,
    decrement,
} from '../reducers/counter';

const Home = (props) => {
    return (
        <div>
            <h1>Home</h1>
            <p>{props.countValue}</p>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
            <button onClick={() => props.changePage()}>Click Here</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    countValue: state.counter.countValue
});

/* REDUX WAY OF ROUTING */
const mapDispatchToProps = (dispatch) => bindActionCreators({
    increment,
    decrement,
    changePage: () => push('/about')
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);