import './chess.css'

export function ChessTile(props) {
    const isEven = (props.colIndex + props.rowIndex) % 2 === 0

    let className
    if (props.isColoredTile) {
        className = `tile ${isEven ? 'colorOne' : 'colorTwo'}`
    } else {
        className = 'tile'
    }

    return <div className={className}>{props.displayValue}</div>
}