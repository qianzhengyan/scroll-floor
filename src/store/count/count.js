const count = (state={count:0},actions)=>{
    switch (actions.type) {
        case "ADD_COUNT":
            state.count++;
            return {...state}
        case "DEL_COUNT":
            state.count--;
            return {...state}
        default:
            return {...state}
    }
}
export default count;