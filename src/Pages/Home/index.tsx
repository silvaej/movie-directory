import { useState } from 'react'

/* COMPONENTS */
import FilterItem from '../../Components/FilterItem'

/* STYLING ASSETS */
import css from './styles.module.css'
import NavArrow from '../../Assets/images/nav-arrow.svg'
import SearchIcon from '../../Assets/images/tool-search.svg'
import FilterIcon from '../../Assets/images/tool-filters.svg'
import NoResultSticker from '../../Assets/images/no-result-sticker.svg'

function Home() {
    const [activeFilters, setActiveFilters] = useState<Array<string>>([])
    const [filteredItems, setFilteredItems] = useState<Array<number>>([]) // TO DO: CHANGE THE TYPE
    const [openFilterBox, setOpenFilterBox] = useState<boolean>(false)
    const mockFilters = [
        'Horror',
        'Adventure',
        'Science Fiction',
        'Romance',
        'Comedy',
    ]

    const removeFilter = (title: string) => {
        setActiveFilters(activeFilters.filter((item) => item !== title))
    }

    const clearFilters = () => {
        setActiveFilters([])
    }

    const handleOpenFilter = () => {
        setOpenFilterBox(!openFilterBox)
    }

    const addFilter = (title: string) => {
        setActiveFilters([...activeFilters, title])
    }

    return (
        <main className={css.container}>
            <section className={css.movies_directory}>
                <div className={css.directory_content}>
                    <div className={css.toolbar}>
                        <div className={css.main_toolbar}>
                            <input
                                className={css.searchbar}
                                type='text'
                                placeholder='Search movie title, genre, etc ...'></input>
                            <button className={css.search_button}>
                                <img src={SearchIcon} alt='go' />
                            </button>
                            <button
                                className={css.filter_button}
                                onClick={handleOpenFilter}>
                                <img src={FilterIcon} alt='filters' />
                            </button>
                            {openFilterBox && (
                                <div className={css.filter_box}>
                                    {!!activeFilters.length && (
                                        <div
                                            className={
                                                css.filter_box_selected_filters
                                            }>
                                            <h1>Selected Filters</h1>
                                        </div>
                                    )}
                                    <div className={css.filter_box_all_filters}>
                                        <h1>All Filters</h1>
                                        <div className={css.filter_box_filters}>
                                            {mockFilters.map((item) => (
                                                <FilterItem
                                                    type='box'
                                                    title={item}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        {!!activeFilters.length && (
                            <div className={css.filter_section}>
                                <div className={css.filter_list_container}>
                                    {activeFilters.map((item) => (
                                        <FilterItem
                                            type='display'
                                            title={item}
                                            handleX={removeFilter}
                                        />
                                    ))}
                                </div>
                                <div
                                    className={css.clear_filter}
                                    onClick={clearFilters}>
                                    Clear Filter
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={css.result}>
                        {!filteredItems.length ? (
                            <div className={css.no_result_container}>
                                <img
                                    src={NoResultSticker}
                                    alt='no result'></img>
                                <h1>No Results Found</h1>
                                <p>
                                    We cannot find the item matching your search
                                    😞 Please try again.
                                </p>
                            </div>
                        ) : (
                            <div className={css.result_container}></div>
                        )}
                    </div>
                </div>
                <div className={css.directory_navigation}>
                    <button className={css.prev_nav}>
                        <img src={NavArrow} alt='nav-prev' />
                    </button>
                    <button className={css.next_nav}>
                        <img src={NavArrow} alt='next-prev' />
                    </button>
                </div>
            </section>
            <section className={css.movie_information}></section>
        </main>
    )
}

export default Home
