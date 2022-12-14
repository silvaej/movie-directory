import { memo } from 'react'
import css from './styles.module.css'
import NavArrow from '../../Assets/images/nav-arrow.svg'

function Pagination() {
    return (
        <div className={css.directory_navigation}>
            <button className={css.prev_nav}>
                <img src={NavArrow} alt='nav-prev' />
            </button>
            <button className={css.selected}>1</button>
            <button>2</button>
            <button>3</button>
            <button>...</button>
            <button>10</button>
            <button className={css.next_nav}>
                <img src={NavArrow} alt='next-prev' />
            </button>
        </div>
    )
}

export default memo(Pagination)
