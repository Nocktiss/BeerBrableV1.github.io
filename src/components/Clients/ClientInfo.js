import { connect } from 'react-redux';
import ClientInfoComponent from '../Clients/ClientInfoComponent';

const mapStateToProps = state => {
  return {
    clientName: state.clientName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateClientName: (e) => dispatch({type:'UPDATE_CLIENT_NAME', name: e.target.value})
  };
};

 const ClientInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientInfoComponent);
export default ClientInfo;

