import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import devToolsEnhancer from 'remote-redux-devtools';
import { composeWithDevTools,  } from 'remote-redux-devtools';
import reduxThunk from 'redux-thunk'
const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});


const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

// const store = createStore(
//   reducer,
//   // composeEnhancers(
//   //   applyMiddleware(reduxThunk),
//   //   // other store enhancers if any
//   // )
// );

export default store;

