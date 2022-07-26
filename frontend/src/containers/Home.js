import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import ListingForms from '../components/ListingForms'
import Listings from '../components/Listings'
import Pagination from '../components/Pagination'

const Home = () => {
    const [listings, setListings] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [listingsPerPage, setListingsPerPage] = useState(3)
    const [active, setActive] = useState(1)

    const indexOfLastListings = currentPage * listingsPerPage
    const indexOfFirstListings = indexOfLastListings - listingsPerPage
    const currentListings = listings.slice(indexOfFirstListings, indexOfLastListings)

    const visitPage = (page) => {
        setCurrentPage(page)
        setActive(page)
    };

    const previous_number = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
            setActive(currentPage - 1);
        }
    };

    const next_number = () => {
        if (currentPage !== Math.ceil(listings.length / 3)) {
            setCurrentPage(currentPage + 1);
            setActive(currentPage + 1);
        }
    };

    return (
        <main className="home">
            <Helmet>
                <title>Realest Estate -- Home</title>
                <meta name="description" content="realest estate home page" />
            </Helmet>
            <section className="home__form">
                <ListingForms setListings={setListings} />
            </section>
            <section className="home__listings">
                < Listings listings={currentListings} />
            </section>
            <section className="home__pagination">
                <div className="row">
                    {
                        listings.length !== 0 ? (
                            <Pagination itemsPerPage={listingsPerPage}
                            count={listings.length}
                            visitPage={visitPage}
                            previous={previous_number}
                            next={next_number}
                            active={active}
                            setActive={setActive} />
                        ) : null
                    }
                </div>
            </section>
        </main>
    )
}

export default Home
