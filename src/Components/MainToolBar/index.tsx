import FilterBox from '../FilterBox'
import SearchInput from '../SearchInput'
import css from './styles.module.css'
import SearchIcon from '../../Assets/images/tool-search.svg'
import FilterIcon from '../../Assets/images/tool-filters.svg'
import HomeCtx from '../../Context/HomeContext'
import { memo, useContext } from 'react'

function MainToolBar() {
    const { openFilterBox, setOpenFilterBox } = useContext(HomeCtx)
    const handleOpenFilter = () => {
        if (setOpenFilterBox) setOpenFilterBox(!openFilterBox)
    }
    return (
        <div className={css.main_toolbar}>
            <SearchInput placeholder='Search movie title, genre, etc ...' />
            <button className={css.search_button}>
                <img src={SearchIcon} alt='go' />
            </button>
            <button className={css.filter_button} onClick={handleOpenFilter}>
                <img src={FilterIcon} alt='filters' />
            </button>
            {openFilterBox && <FilterBox />}
        </div>
    )
}

export default memo(MainToolBar)
