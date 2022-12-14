import { memo } from 'react'
import css from './styles.module.css'

function Header() {
    return (
        <div className={css.container}>
            <div className={css.icon_wrapper}>
                <h1 className={css.name}>MOV</h1>
                <h2 className={css.author}>by zlbss</h2>
            </div>
        </div>
    )
}

export default memo(Header)
