import Header from "../components/Header";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    data: state.cartReducer
})

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);