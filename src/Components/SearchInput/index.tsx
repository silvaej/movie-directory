import { memo } from 'react'
import css from './styles.module.css'

interface Props {
    placeholder: string
    value: string
    handleChange: (q: string) => void
    handleSubmit: () => void
}

function SearchInput(props: Props) {
    return (
        <input
            className={css.searchbar}
            type='text'
            value={props.value}
            placeholder={props.placeholder}
            onChange={(e) => props.handleChange(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') props.handleSubmit()
            }}></input>
    )
}

export default memo(SearchInput)
