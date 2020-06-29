import { connect } from 'react-redux';
import Planches from '../CategorieDeProduits/Planches/Planches'


const mapStateToProps = state => {
  return {
    beerbeer: state.beerbeer,
    beerbeerbeer: state.beerbeerbeer,
    quantity: state.quantity,
    quantity2: state.quantity2,
    petitTotal: state.quantity2 * state.beerbeerbeer, 
    petitTotal2: state.quantity * state.beerbeer,



    totalPrice:  state.quantity2 * state.beerbeerbeer + state.quantity * state.beerbeer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clickPlus:  () => dispatch({type:'INCREASE'}),
    clickMinus: () => dispatch({type:'DECREASE'}),
    clickPlus1:  () => dispatch({type:'INCREASE1'}),
    clickMinus1: () => dispatch({type:'DECREASE1'}),
  };
};

const Product = connect(
  mapStateToProps,
  mapDispatchToProps
)(Planches,);

export default Product;

