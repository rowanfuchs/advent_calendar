import {useRef} from "react";
import Link from 'next/link'

const Active = ({day}) => {
    const doorRef = useRef();

    function openAdvent() {
        doorRef.current.classList.toggle("open")
    }

    return <>
        <div className="advent-wrapper">
            <div ref={doorRef}
                 onClick={openAdvent}
                 className="cursor-pointer advent-closed"
                 style={{
                     backgroundImage: `url(${day.adventImageClosed?.url})`,
                     backgroundPosition: 'center',
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                 }}>
            </div>
            <Link href={`/advent/${day.id}`}>
                <div className="cursor-pointer advent-open"
                     style={{
                         backgroundImage: `url(${day.adventImageOpen?.url})`,
                         backgroundPosition: 'center',
                         backgroundSize: 'cover',
                         backgroundRepeat: 'no-repeat',
                     }}>
                </div>
            </Link>
        </div>
    </>
}

export default Active
