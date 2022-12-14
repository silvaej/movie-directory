import { memo } from 'react'
import css from './styles.module.css'

interface Props {
    placeholder: string
}

function SearchInput(props: Props) {
    return (
        <input
            className={css.searchbar}
            type='text'
            placeholder={props.placeholder}></input>
    )
}

export default memo(SearchInput)
