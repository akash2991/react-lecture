import './chess.css'
import { ChessBoard } from './ChessBoard'
import { ChessTile } from './ChessTile'
import { Side } from './Side'

const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',]
const row = [1, 2, 3, 4, 5, 6, 7, 8,]


export function Chess() {
    return (
        <div className='row'>
            <Side />
            <div>
                {/* top */}
                <ChessBoard />
                {/* bottom */}
            </div>
            <Side/>
        </div>
    )
}