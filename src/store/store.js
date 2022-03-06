import { createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from 'redux-thunk';
import myProfile from "./reducer/myProfile";
const reducer=combineReducers({
    myProfile
})
const store=createStore(reducer,applyMiddleware(reduxThunk));
export default store;