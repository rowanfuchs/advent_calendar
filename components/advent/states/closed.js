const Closed = ({day}) => {
    return <>
        <img alt={day?.date} src={day.adventImageClosed?.url}
             style={{maxWidth: '192px', maxHeight: '192px'}}/>
    </>
}

export default Closed
