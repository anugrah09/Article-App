 const Search =(project)=>{
    return(dispatch, getState)=>{
        dispatch({
            type: 'Search',
            add: project.search
        })
    }
}
export const Sort =(project)=>{
    return(dispatch, getState)=>{
        dispatch({
            type: 'Sort',
            add: project
        })
    }
}
export const Page =(project)=>{
    return(dispatch, getState)=>{
        dispatch({
            type: 'Page',
            page: project
        })
    }
}
export default Search ;