import { ChessTile } from "./ChessTile"


const row = [1, 2, 3, 4, 5, 6, 7, 8,]


export function Side() {
    return (
        <div className="side">
            {row.map(item => <ChessTile displayValue={item} isColoredTile={false} />)}
        </div>
    )
}