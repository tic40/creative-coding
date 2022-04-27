import p5Types from 'p5'

const Color = { stroke: '#000000', fill: '#009ad6' } as const
const CellType = { dead: 0, alive: 1 } as const
type valueOf<T> = T[keyof T]
type Board = valueOf<typeof CellType>[][]
const cellSize = 10
const buttonStyle =
  'background: #4CAF50; opacity: 0.8; color: white; padding: 8px; border: none;'

let cellWidth: number
let cellHeight: number
let board: Board
let drawBoard: Board
let speed = 0
let pause = 1

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)

  const startBtn = p.createButton('Start')
  startBtn.position(0, 0)
  startBtn.mousePressed(start)
  startBtn.style(buttonStyle)

  const stopBtn = p.createButton('Stop')
  stopBtn.position(0, 50)
  stopBtn.mousePressed(stop)
  stopBtn.style(buttonStyle)

  const clearBtn = p.createButton('Clear')
  clearBtn.position(0, 100)
  clearBtn.mousePressed(() => initBoard(p))
  clearBtn.style(buttonStyle)

  const randomBtn = p.createButton('Random')
  randomBtn.position(0, 150)
  randomBtn.mousePressed(() => randomBoard(p))
  randomBtn.style(buttonStyle)

  const changeSpeedBtn = p.createButton('Change speed')
  changeSpeedBtn.position(0, 200)
  changeSpeedBtn.mousePressed(toggleSpeed)
  changeSpeedBtn.style(buttonStyle)

  initBoard(p)
  randomBoard(p)
  drawCurrentBoard(p)
}

export function draw(p: p5Types) {
  if (pause) return
  if (speed == 1 && p.frameCount % 10) return
  else if (p.frameCount % 2) return

  proceed(p)
}

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

function proceed(p: p5Types) {
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
  drawCurrentBoard(p)
}

function drawCurrentBoard(p: p5Types) {
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

function toggleSpeed() {
  speed ^= 1
}

function stop() {
  pause = 1
}

function start() {
  pause = 0
}

function initBoard(p: p5Types) {
  cellHeight = p.round(p.height / cellSize)
  cellWidth = p.round(p.width / cellSize)
  board = new Array(cellHeight).fill(0).map(() => new Array(cellWidth).fill(0))
  drawBoard = board.map((v) => [...v])
}

function randomBoard(p: p5Types) {
  initBoard(p)
  for (let i = 0; i < cellHeight; i++) {
    for (let j = 0; j < cellWidth; j++) {
      const t = p.random(100) > 50 ? CellType.alive : CellType.dead
      board[i][j] = drawBoard[i][j] = t
    }
  }
}

export function mouseClicked(p: p5Types) {
  const x = p.floor(p.mouseX / cellSize)
  const y = p.floor(p.mouseY / cellSize)

  drawBoard[y][x] =
    drawBoard[y][x] === CellType.dead ? CellType.alive : CellType.dead
  drawCurrentBoard(p)
}
