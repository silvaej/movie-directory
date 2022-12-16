import css from './styles.module.css'
import Close from '../../Assets/images/filter-close.svg'
import { memo, useContext, useEffect, useState } from 'react'
import HomeCtx from '../../context/HomeContext'
import FiltersInterface from '../../interfaces/FilterInterface'

interface Props {
    filter: FiltersInterface
    type: string
    variant?: string
    handleX?: (title: string) => void
}

function FilterItem(props: Props) {
    const { dispatch, activeFilters } = useContext(HomeCtx)
    const [selected, setSelected] = useState<boolean>(
        activeFilters
            ? !!activeFilters?.find((item) => item.id === props.filter.id)
            : false
    )

    const addFilter = (selectedFilter: FiltersInterface) => {
        if (dispatch) dispatch({ type: 'ADD', filter: selectedFilter })
    }

    const removeFilter = (selectedFilter: FiltersInterface) => {
        if (dispatch) dispatch({ type: 'REMOVE', filter: selectedFilter })
    }

    const handleClick = () => {
        if (props.type === 'box') {
            if (selected) {
                removeFilter(props.filter)
            } else {
                addFilter(props.filter)
            }

            if (!props.variant) setSelected((state) => !state)
        }
    }

    useEffect(() => {
        setSelected(
            activeFilters
                ? !!activeFilters?.find((item) => item.id === props.filter.id)
                : false
        )
    }, [activeFilters, props.filter])

    return (
        <div
            className={`${css.container} ${
                selected ? css.container_selected : ''
            } ${props.type === 'box' ? css.container_box : ''}`}
            onClick={handleClick}>
            <p>{props.filter.name}</p>
            {props.type === 'display' && (
                <button onClick={() => removeFilter(props.filter)}>
                    <img src={Close} alt='X'></img>
                </button>
            )}
        </div>
    )
}

export default memo(FilterItem)
