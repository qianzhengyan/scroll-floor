const list = ((state={list:[]},actions)=>{
    switch(actions.type){
        case "CHANGE_lIST":
            state.list.push(actions.name);
            return {
                ...state,
                list:[...state.list]
            }
        
            case "DEL_lIST":
                state.list.splice(actions.index,1);
                return {
                    ...state,
                    list:[...state.list]
                }
        default:
            return {
                ...state,
                list:[...state.list]
            }
    }
})

export default list;