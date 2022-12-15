import SearchInput from '../SearchInput'
import css from './styles.module.css'
import SearchIcon from '../../Assets/images/tool-search.svg'
import RefreshIcon from '../../Assets/images/tool-refresh.svg'
import { memo } from 'react'

function MainToolBar() {
    return (
        <div className={css.main_toolbar}>
            <SearchInput placeholder='Search movie title, genre, etc ...' />
            <button className={css.search_button}>
                <img src={SearchIcon} alt='go' />
            </button>
            <button className={css.search_button}>
                <img src={RefreshIcon} alt='refresh' />
            </button>
        </div>
    )
}

export default memo(MainToolBar)
