import css from './styles.module.css'

/* COMPONENTS */
import FilterItem from '../../Components/FilterItem'
import { memo, useContext } from 'react'

/* CONTEXT */
import HomeCtx from '../../Context/HomeContext'

function FilterBox() {
    const { activeFilters, filters } = useContext(HomeCtx)

    return (
        <div className={css.filter_box}>
            {activeFilters && !!activeFilters.length && (
                <div className={css.filter_box_selected_filters}>
                    <h1>Selected Filters</h1>
                    <div className={css.filter_box_filters}>
                        {activeFilters.map((item, index) => (
                            <FilterItem
                                key={`selected-${index}`}
                                type='box'
                                variant='selected'
                                filter={item}
                            />
                        ))}
                    </div>
                </div>
            )}
            <div className={css.filter_box_all_filters}>
                <h1>All Filters</h1>
                <div className={css.filter_box_filters}>
                    {activeFilters &&
                        filters &&
                        filters.map((item, index) => (
                            <FilterItem
                                key={`all-${index}`}
                                type='box'
                                filter={item}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default memo(FilterBox)
