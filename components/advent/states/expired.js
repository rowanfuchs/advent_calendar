import Link from "next/link";

const Expired = ({day}) => {
    return <>
        <div className="cursor-pointer">
            <Link href={`/advent/${day.id}`}>
                <img alt={day?.date} src={day.adventImageExpired?.url} className="cursor-pointer"
                     style={{
                         maxWidth: '192px',
                         maxHeight: '192px',
                         position: 'absolute',
                         zIndex: 1
                     }}/>
            </Link>
            <img alt={day?.date} src={day.adventImageOpen?.url}
                 style={{width: '192px', height: '192px'}} className="opacity-50"/>
        </div>
    </>
}

export default Expired
