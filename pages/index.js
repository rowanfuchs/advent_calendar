import React, {useEffect, useState} from 'react';
import Layout from '../components/page/layout';
import Day from '../components/advent/day';
import {request} from 'graphql-request';
import Hero from "../components/page/hero";

export default function Index() {
    const [days, setDays] = useState(null);

    useEffect(() => {
        const fetchDays = (async () => {
            const {days} = await request(process.env.GRAPHQL_ENDPOINT,
                `{ 
                  days {
                    id
                    adventDate
                    automaticallyActivate
                    isExpired
                    isActive
                    adventImageClosed {
                      url
                    }
                    adventImageExpired {
                      url
                    }
                    adventImageOpen {
                      url
                    }
                  }
              }`);
            setDays(days.sort((a, b) => a.adventDate > b.adventDate ? 1 : -1));
        })();

    }, []);
    return (
        <>
            <Hero/>
            <section className="relative py-16 -mt-36">
                <div className="container mx-auto px-4">
                    <div className="bg-white w-full mb-6 shadow-xl rounded-lg min-h-screen">
                        <div className="flex flex-wrap justify-center p-4">
                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-16">
                                {!days ? (
                                    <span>...</span>
                                ) : (
                                    <React.Fragment>
                                        {days.map((day) => (
                                            <Day key={day.id} day={day}/>
                                        ))}
                                    </React.Fragment>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

Index.getLayout = function getLayout(page) {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}
