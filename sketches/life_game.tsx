import p5Types from 'p5'

const Color = { stroke: '#000000', fill: '#009ad6' } as const
const CellType = { dead: 0, alive: 1 } as const
type valueOf<T> = T[keyof T]
type Board = valueOf<typeof CellType>[][]
const cellSize = 10
let cellWidth: number
let cellHeight: number
let board: Board
let drawBoard: Board
let speed = 0

function calcAliveCellNum(y: number, x: number): number {
  let res = 0
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const ty = y + i
      const tx = x + j
      if (ty < 0 || cellHeight <= ty || tx < 0 || cellWidth <= tx) continue
      if (i === 0 && j === 0) continue

      if (board[ty][tx] === CellType.alive) res++
    }
  }
  return res
}

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)

  cellHeight = p.round(p.height / cellSize)
  cellWidth = p.round(p.width / cellSize)
  board = new Array(cellHeight).fill(0).map(() => new Array(cellWidth).fill(0))
  drawBoard = board.map((v) => [...v])

  for (let i = 0; i < cellHeight; i++) {
    for (let j = 0; j < cellWidth; j++) {
      const t = p.random(100) > 60 ? CellType.alive : CellType.dead
      board[i][j] = drawBoard[i][j] = t
    }
  }

  p.stroke(Color.stroke)
}

export function draw(p: p5Types) {
  if (speed == 1 && p.frameCount % 5) return
  else p.frameCount % 2

  for (let i = 0; i < cellHeight; i++) {
    for (let j = 0; j < cellWidth; j++) {
      const aliveCellNum = calcAliveCellNum(i, j)
      if (board[i][j] === CellType.dead) {
        aliveCellNum === 3 && (drawBoard[i][j] = CellType.alive)
      } else {
        drawBoard[i][j] = [2, 3].includes(aliveCellNum)
          ? CellType.alive
          : CellType.dead
      }
    }
  }

  p.clear()

  for (let i = 0; i < cellHeight; i++) {
    for (let j = 0; j < cellWidth; j++) {
      drawBoard[i][j] === CellType.alive ? p.fill(Color.fill) : p.noFill()
      const ty = i * cellSize
      const tx = j * cellSize
      p.rect(tx, ty, cellSize, cellSize)
    }
  }

  board = drawBoard.map((v) => [...v])
}

export function mouseClicked() {
  speed ^= 1
}
