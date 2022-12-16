import FiltersInterface from '../interfaces/FilterInterface'

interface Action {
    type: string
    filter: FiltersInterface
}

function filterReducer(state: Array<FiltersInterface>, action: Action) {
    switch (action.type) {
        case 'ADD':
            return [...state, action.filter]
        case 'REMOVE':
            return state.filter((item) => item.id !== action.filter.id)
        case 'CLEAR':
            return []
        default:
            return state
    }
}

export default filterReducer
