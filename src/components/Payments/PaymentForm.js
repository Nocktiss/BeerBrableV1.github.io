import { connect } from 'react-redux';
import PaymentFormComponent from '../Payments/PaymentFormComponent';



const mapStateToProps = state => {
  return {
    clientName: state.clientName,
    total: state.total,
    totalPrice: state.total * 100
  };
};
// const mapDispatchToProps = dispatch => {
//   return {
//     updateClientName: (e) => dispatch({type:'UPDATE_CLIENT_NAME', name: e.target.value})
//   };
// };
const PaymentForm = connect(
	mapStateToProps,
	// mapDispatchToProps
)(PaymentFormComponent
  );

	export default connect(mapStateToProps)(PaymentForm)
 