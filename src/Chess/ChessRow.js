import './chess.css'
import { ChessTile } from './ChessTile'

const row = [1, 2, 3, 4, 5, 6, 7, 8,]
// const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']


export function ChessRow(props) {
    return (
        <div className='row'>
            {/* <span>{props.rowIndex}</span> */}
            {row.map((item, index) => <ChessTile colIndex={index} rowIndex={props.rowIndex} isColoredTile={true} />)} 
        </div>
    )
}