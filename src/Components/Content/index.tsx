import HomeCtx from '../../Context/HomeContext'
import Pagination from '../Pagination'
import ResultBox from '../ResultBox'
import { useContext } from 'react'
import css from './styles.module.css'

function Content() {
    const { header } = useContext(HomeCtx)
    return (
        <div className={css.container}>
            <div className={css.header_section}>
                <h1>{header}</h1>
                <Pagination />
            </div>
            <ResultBox />
        </div>
    )
}

export default Content
