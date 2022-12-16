import { memo, useContext } from 'react'
import css from './styles.module.css'
import FIRST from '../../assets/images/pagination-first.svg'
import LAST from '../../assets/images/pagination-last.svg'
import NEXT from '../../assets/images/pagination-next.svg'
import PREV from '../../assets/images/pagination-prev.svg'
import HomeCtx from '../../context/HomeContext'

function Pagination() {
    const { page, lastPage, setPage } = useContext(HomeCtx)
    return (
        <div className={css.directory_navigation}>
            <button
                disabled={page === 1}
                onClick={() => {
                    if (setPage && page && page > 1) setPage(1)
                }}>
                <img src={FIRST} alt='first'></img>
            </button>
            <button
                disabled={page === 1}
                onClick={() => {
                    if (setPage && page && page > 1) setPage(page - 1)
                }}>
                <img src={PREV} alt='prev'></img>
            </button>
            <p>
                Page {page} of {lastPage}
            </p>
            <button
                disabled={page === lastPage}
                onClick={() => {
                    if (setPage && page && lastPage && page < lastPage)
                        setPage(page + 1)
                }}>
                <img src={NEXT} alt='next'></img>
            </button>
            <button
                disabled={page === lastPage}
                onClick={() => {
                    if (setPage && page && lastPage && page < lastPage)
                        setPage(lastPage)
                }}>
                <img src={LAST} alt='last'></img>
            </button>
        </div>
    )
}

export default memo(Pagination)
