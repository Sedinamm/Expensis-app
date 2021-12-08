const initialState = {
    expens: [],
}


const expensReducers  = (state = initialState, action) => {
   switch(action.type) {
       case "ADD_EXPENS":
           return {...state, expens: [...state.expens, action.payload]};


       case "DELETE_EXP":
           const filteredExpens = state.expens.filter(
               (expen) => expen.id !== action.payload
           ); 
           return{...state, expens: filteredExpens}


       case "EDIT_EXP":
           const updatedExpens= state.expens.map((expen) => {
               if(expen.id === action.payload.expenId)  {
                   return action.payload.updatedExpens;

               }  
               return expen;
           });
   return {...state, expens: updatedExpens} 

   default:
       return state;
  

   }
}

export default expensReducers;