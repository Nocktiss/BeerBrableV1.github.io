import { combineReducers, createStore } from 'redux';

// reducer to update the quantity
function quantity(state = [], action) {
  switch (action.type) {
  case 'INCREASE':
  if(!state[action.product.id]) state[action.product.id]=0;
  state[action.product.id] = state[action.product.id]+1;
    return state;
    
  case 'DECREASE':
    return Math.max(state - 1, 0);
  default:
    return state;
  }
}

function quantity2(state = 0, action) {
  switch (action.type) {
    case 'INCREASE1':
      return state + 1;
    case 'DECREASE1':
      return Math.max(state - 1, 0);
    default:
      return state;
  }
}

// reducer to update unit price
function beerbeer(state = 10, action) {
  switch (action.type) {
    case 'UPDATE_UNIT_PRICE':
      return action.beerbeer;
    default:
      return state;
  }
}

function beerbeerbeer(state = 5, action) {
  switch (action.type) {
    case 'UPDATE_UNIT_BEERBEERBEER':
      return action.beerbeerbeer;
    default:
      return state;
  }
}




function totalPrice(state = 110, action) {
  switch (action.type) {
    case 'UPDATE_TOTAL_PRICE':
      return action.totalPrice;
    default:
      return state;
  }
}


// function clientName(state = 'Jason BINOUSE', action) {
//   switch (action.type) {
//   case 'UPDATE_CLIENT_NAME':
//     return action.clientName;
//   default:
//     return state;
//   }
// }
function clientName(state = 'John Doe', action) {
  switch (action.type) {
    case 'UPDATE_CLIENT_NAME':
      return action.clientName;
    default:
      return state;
  }
}

// composition of the state with reducers
const updateState = combineReducers(
  quantity,
  quantity2,
  beerbeer,
  clientName,
  beerbeerbeer,
  totalPrice,
);

export default createStore(updateState);