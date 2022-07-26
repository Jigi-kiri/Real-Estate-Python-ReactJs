import React, { useEffect, useState, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import House from '../assets/images/02.png'

const About = () => {
    const [topsaller, setTopsaller] = useState([])
    const [realtors, setRealtors] = useState([])

    useEffect(() => {
        axios.defaults.headers = {
            'Content-Type': 'application/json'
        };

        const getTopsaller = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/realtors/topsaller/');
                setTopsaller(res.data);
            }
            catch (err) {

            }
        }

        getTopsaller();
    }, []);

    useEffect(() => {
        axios.defaults.headers = {
            'Content-Type': 'application/json'
        };

        const getRealtors = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/realtors/');
                setRealtors(res.data);
            }
            catch (err) {

            }
        }

        getRealtors();
    }, []);

    const getAllRealtors = () => {
        let allRealtors = [];
        let results = [];

        realtors.map(realtor => {
            return allRealtors.push(
                <Fragment key={realtor.id}>
                    <div className="about__display">
                        <img className="about__display__image" src={realtor.photo} alt="" />
                    </div>
                    <h3 className="about__realtor">{realtor.name}</h3>
                    <p className="about__contact">{realtor.phone}</p>
                    <p className="about__contact">{realtor.email}</p>
                    <p className="about__about">{realtor.description}</p>
                </Fragment>
            );
        });
        for (let i = 0; i < realtors.length; i += 3) {
            results.push(
                <div key={i} className='row'>
                    <div className='col-1-of-3'>
                        {allRealtors[i]}
                    </div>
                    <div className='col-1-of-3'>
                        {allRealtors[i + 1] ? allRealtors[i + 1] : null}
                    </div>
                    <div className='col-1-of-3'>
                        {allRealtors[i + 2] ? allRealtors[i + 2] : null}
                    </div>
                </div>
            );
        }

        return results;
    };

    const getTopSeller = () => {
        let result = [];

        topsaller.map(seller => {
            result.push(
                <Fragment key={seller.id}>
                    <div className="about__display">
                        <img className="about__display__image" src={seller.photo} alt="" />
                    </div>
                    <h3 className="about__topseller">Top Seller: </h3>
                    <p className="about__realtor">{seller.name}</p>
                    <p className="about__contact">{seller.phone}</p>
                    <p className="about__contact">{seller.email}</p>
                    <p className="about__about">{seller.description}</p>
                </Fragment>
            );
        });
        return result;
    }

    return (
        <main className="about">
            <Helmet>
                <title>Realest Estate -- About</title>
                <meta name="description" content="About us" />
            </Helmet>
            <header className="about__header">
                <h1 className="about__heading">About Realest Estate</h1>
            </header>
            <section className="about__info">
                <div className="row">
                    <div className="col-3-of-4">
                        <h2 className="about__subheading">We find the perfect home for you.</h2>
                        <p className="about__paragraph">
                            Proin non orci sapien. Nunc auctor non leo ac convallis. Cras turpis elit, luctus non augue et, vulputate dapibus enim. Ut ut ante at tortor scelerisque lobortis. Fusce finibus lectus at massa pellentesque, a dictum elit sollicitudin. Cras ultrices nunc nec eleifend porttitor. Aenean fermentum at elit sed porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas viverra sit amet arcu et consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque egestas, ante vitae imperdiet vehicula, orci ante pulvinar est, vitae elementum felis mi eu augue.
                        </p>
                        <div className="about__display">
                            <img className="about__display__image" src={House} alt="" />
                        </div>
                        <p className="about__paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a erat sed dolor interdum faucibus eu at sem. Vivamus sollicitudin urna non porta auctor. Maecenas eu scelerisque nisi. Ut aliquet finibus tincidunt. Suspendisse sit amet rhoncus augue, sed fermentum lacus. Nulla sed lectus enim. Mauris orci eros, vulputate vitae quam a, eleifend dignissim sem. Morbi venenatis, diam eu pretium ornare, libero magna aliquam dui, vitae varius eros diam sed lorem. Donec hendrerit nulla vel velit consectetur, at bibendum erat placerat. Cras posuere, augue id tincidunt mollis, libero libero volutpat magna, nec finibus turpis sem at justo.
                        </p>
                    </div>
                    <div className="col-1-of-4">
                        {getTopSeller()}
                    </div>
                </div>
            </section>
            <section className="about__team">
                <div className="row">
                    <h2 className="about__subheading">Meet our awesome team!</h2>
                </div>
                {getAllRealtors()}
            </section>
        </main>
    )
}

export default About
