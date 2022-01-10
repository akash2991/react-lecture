import './chess.css'
import { ChessRow } from './ChessRow'
// import { ChessTile } from './ChessTile'

// const row = [1, 2, 3, 4, 5, 6, 7, 8]
const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',]


export function ChessBoard() {
    return (
        <div>
            {col.map((item, index) => <ChessRow rowIndex={index} />)} 
        </div>
    )
}