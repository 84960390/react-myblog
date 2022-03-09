import { createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from 'redux-thunk';
import myProfile from "./reducer/myProfile";
import articleNum from "./reducer/articleNum";
const reducer=combineReducers({
    myProfile,
    articleNum
})
const store=createStore(reducer,applyMiddleware(reduxThunk));
export default store;