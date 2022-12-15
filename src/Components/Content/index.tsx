import Pagination from '../Pagination'
import ResultBox from '../ResultBox'
import css from './styles.module.css'

function Content() {
    return (
        <div className={css.container}>
            <div className={css.header_section}>
                <h1>Popular Movies</h1>
                <Pagination />
            </div>
            <ResultBox />
        </div>
    )
}

export default Content
