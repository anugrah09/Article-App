const initstate = {
    query: null,
    page: 1,
    sort: 'search'
}

const detailsreducer = (state = initstate, action) => {
    switch (action.type) {
        case 'Search':
            return {
                ...state,
                query: action.add
            }
        case 'Page':
            return {
                ...state,
                page: action.page
            }
        case 'Sort':
            console.log('date', action.add);
            return {
                ...state,
                sort: action.add
            }
        default:
            return state;
    }
}

export default detailsreducer;