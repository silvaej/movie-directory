import HomeCtx from '../../Context/HomeContext'
import { memo, useContext } from 'react'
import FilterItem from '../FilterItem'
import css from './styles.module.css'

function FilterSection() {
    const { activeFilters, dispatch } = useContext(HomeCtx)

    const clearFilters = () => {
        if (dispatch) dispatch({ type: 'CLEAR', filter: '' })
    }

    return (
        <div className={css.filter_section}>
            <div className={css.filter_list_container}>
                {activeFilters &&
                    activeFilters.map((item, index) => (
                        <FilterItem
                            key={`active-${index}`}
                            type='display'
                            filter={item}
                        />
                    ))}
            </div>
            <div className={css.clear_filter} onClick={clearFilters}>
                Clear Filter
            </div>
        </div>
    )
}

export default memo(FilterSection)
