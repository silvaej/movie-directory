import css from './styles.module.css'
import Close from '../../Assets/images/filter-close.svg'

interface Props {
    title: string
    type: string
    handleX?: (title: string) => void
    handleSelect?: (title: string) => void
}

function FilterItem(props: Props) {
    return (
        <div className={css.container}>
            <p>{props.title}</p>
            {props.type === 'display' && (
                <button
                    onClick={() => props.handleX && props.handleX(props.title)}>
                    <img src={Close} alt='X'></img>
                </button>
            )}
        </div>
    )
}

export default FilterItem
