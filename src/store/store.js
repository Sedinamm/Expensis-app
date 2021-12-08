import { createStore } from "redux";
import expensReducers from "../reducers/expensesReducers";


  const store = createStore(expensReducers);

  export default store;