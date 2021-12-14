import {useRouter} from 'next/router'
import {request} from "graphql-request";
import {useEffect, useState} from "react";
import Layout from "../../components/page/layout";
import Hero from "../../components/page/hero";
import Link from "next/link";

export default function Advent() {
    const router = useRouter()
    const {id} = router.query
    const [day, setDay] = useState(null);

    useEffect(() => {
        if (!router.isReady) return;
        const fetchDay = (async () => {
            const {day} = await request(process.env.GRAPHQL_ENDPOINT,
                `{ 
                  day(where: {id: "${id}"}) {
                    id
                    adventDate
                    automaticallyActivate
                    isExpired
                    isActive
                    adventContent {
                      html
                      markdown
                      raw
                      text
                    }
                  }
              }`);
            setDay(day);
        })();

    }, [id]);
    return <>
        <Hero/>
        <section className="relative py-16 -mt-36">
            <div className="container mx-auto px-4">
                <div className="bg-white w-full mb-6 shadow-xl rounded-lg min-h-screen">
                    <Link href={`/`}>
                        <svg version="1.1"
                             viewBox="0 0 100 100"
                             className="fill-current text-gray-800 w-8 float-left cursor-pointer">
                            <g>
                                <path d="M46.1,54.4c-1.1,0-2,0.9-2,2L44,66.1L25.5,48.5L44,30.9V40c0,1.1,0.9,2,2,2s2-0.9,2-2V30c0-1.6-0.8-2.9-2.1-3.5
                            c-1.4-0.6-2.9-0.2-4,0.9L22.5,45.8c-0.7,0.7-1.1,1.7-1.1,2.7c0,1,0.4,2,1.2,2.8l18.8,17.8c0.7,0.7,1.7,1.1,2.7,1.1
                            c0.5,0,1-0.1,1.5-0.3c1.5-0.6,2.4-2,2.4-3.6l0.1-9.9C48.1,55.3,47.2,54.4,46.1,54.4z"/>
                                <path d="M82,46H46c-1.1,0-2,0.9-2,2s0.9,2,2,2h36c1.1,0,2-0.9,2-2S83.1,46,82,46z"/>
                            </g>
                        </svg>
                    </Link>
                    <div className="p-4 md:p-16" dangerouslySetInnerHTML={{__html: day?.adventContent?.html}}/>
                </div>
            </div>
        </section>
    </>
}

Advent.getLayout = function getLayout(page) {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}
