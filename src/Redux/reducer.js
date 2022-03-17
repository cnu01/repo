

const initState = {
    data:[],
    filterData:[],
    isLoading:false,
    isError:false
}

export const Reducer = ()=>{
    switch (action.type) {
		case actions.FETCH_MOVIES:
			return {
				...state,
				movies: action.payload,
			};
		default:
			return state;
	}
}