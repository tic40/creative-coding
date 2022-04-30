import p5Types from 'p5'

const Color = {
  floor: '#FFF',
  wall: '#333',
  start: '#00A000',
  goal: 'red',
} as const
const CellType = { floor: 'floor', wall: 'wall' } as const
type valueOf<T> = T[keyof T]
type Board = valueOf<typeof CellType>[][]
interface Point {
  x: number
  y: number
}
let cellSize = 12
const buttonStyle =
  'background: #4CAF50; opacity: 0.9; color: white; padding: 6px; border: 1px solid #FFF;'
const moves = [
  { x: 1, y: 0 },
  { x: -1, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: -1 },
] as const

let cellWidth: number
let cellHeight: number
let board: Board
let start: Point
let goal: Point

let solveButton: p5Types.Element
let sizeUpButton: p5Types.Element
let sizeDownButton: p5Types.Element
let dist: number[][]
let path: Point[]
let solved: boolean

export function setup(p: p5Types, canvasParentRef: Element) {
  p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)

  solveButton = p.createButton('Solve')
  solveButton.position(5, 5)
  solveButton.mousePressed(() => {
    solved ? init(p) : solve()
    solveButton.html(solved ? 'Reset' : 'Solve')
  })
  solveButton.style(buttonStyle)

  sizeUpButton = p.createButton('＋')
  sizeUpButton.position(64, 5)
  sizeUpButton.mousePressed(() => {
    if (cellSize === 2) return
    cellSize -= 2
    init(p)
  })
  sizeUpButton.style(buttonStyle)

  sizeDownButton = p.createButton('ー')
  sizeDownButton.position(96, 5)
  sizeDownButton.mousePressed(() => {
    if (cellSize === 30) return
    cellSize += 2
    init(p)
  })
  sizeDownButton.style(buttonStyle)

  init(p)
}

function init(p: p5Types) {
  cellHeight = p.round(p.height / cellSize)
  cellWidth = p.round(p.width / cellSize)
  if (cellHeight % 2 == 0) cellHeight--
  if (cellWidth % 2 == 0) cellWidth--
  solved = false
  createMaze(p)
}

function solve() {
  dist = new Array(cellHeight)
    .fill(Infinity)
    .map(() => new Array(cellWidth).fill(Infinity))
  bfs()
  solved = true
  path = []
  searchPath(goal.x, goal.y)
}

function bfs(): void {
  dist[start.y][start.x] = 0
  const q: Point[] = []
  q.push({ x: start.x, y: start.y })

  while (q.length) {
    const now = q.pop()
    if (!now) continue
    const { x, y } = now

    const nd = dist[y][x] + 1
    for (const { x: dx, y: dy } of moves) {
      const nx = x + dx
      const ny = y + dy
      if (board[ny][nx] === CellType.wall) continue
      if (dist[ny][nx] <= nd) continue
      dist[ny][nx] = nd
      q.push({ x: nx, y: ny })
    }
  }
}

function searchPath(x: number, y: number): void {
  if (isStart(x, y)) return

  path.push({ x, y })
  const cur = { cost: Infinity, x: -1, y: -1 }
  for (const { x: dx, y: dy } of moves) {
    const nx = x + dx
    const ny = y + dy
    if (dist[ny][nx] < cur.cost) {
      cur.cost = dist[ny][nx]
      cur.x = nx
      cur.y = ny
    }
  }
  searchPath(cur.x, cur.y)
}

function isGoal(x: number, y: number) {
  return goal.x === x && goal.y === y
}
function isStart(x: number, y: number) {
  return start.x === x && start.y === y
}

function drawCell(p: p5Types, x: number, y: number, color: string) {
  const tx = x * cellSize
  const ty = y * cellSize
  p.fill(color)
  p.noStroke()
  p.rect(tx, ty, cellSize, cellSize)
}

export function draw(p: p5Types) {
  if (!solved) return
  const cur = path.pop()
  if (!cur) return

  const { x, y } = cur
  if (!isStart(x, y) && !isGoal(x, y)) drawCell(p, x, y, '#67A8DD')
}

function decideStartAndGoal(p: p5Types) {
  while (1) {
    start = {
      x: p.floor(p.random(1, cellWidth - 2)),
      y: p.floor(p.random(1, cellHeight - 2)),
    }
    if (board[start.y][start.x] === CellType.floor) break
  }
  while (1) {
    goal = {
      x: p.floor(p.random(1, cellWidth - 2)),
      y: p.floor(p.random(1, cellHeight - 2)),
    }
    if (board[goal.y][goal.x] === CellType.floor && !isStart(goal.x, goal.y))
      break
  }
}

// 棒倒し法
function createMaze(p: p5Types) {
  board = new Array(cellHeight)
    .fill(CellType.floor)
    .map(() => new Array(cellWidth).fill(CellType.floor))

  for (let y = 0; y < cellHeight; y++) {
    for (let x = 0; x < cellWidth; x++) {
      if (x === 0 || x === cellWidth - 1) board[y][x] = CellType.wall
      if (y === 0 || y === cellHeight - 1) board[y][x] = CellType.wall
      if (x % 2 === 0 && y % 2 === 0) board[y][x] = CellType.wall
    }
  }

  for (let y = 2; y < cellHeight - 1; y += 2) {
    for (let x = 2; x < cellWidth - 1; x += 2) {
      const directions = [
        { x: 1, y: 0 },
        { x: 0, y: 1 },
        { x: -1, y: 0 },
      ]
      if (y === 2) directions.push({ x: 0, y: -1 })
      while (1) {
        const dir = p.random(directions)
        const tx = x + dir.x
        const ty = y + dir.y

        if (
          0 <= tx &&
          tx < cellWidth &&
          0 <= ty &&
          ty < cellHeight &&
          board[ty][tx] === CellType.floor
        ) {
          board[ty][tx] = CellType.wall
          break
        }
      }
    }
  }

  p.clear()
  for (let y = 0; y < cellHeight; y++) {
    for (let x = 0; x < cellWidth; x++) drawCell(p, x, y, Color[board[y][x]])
  }

  decideStartAndGoal(p)
  drawCell(p, start.x, start.y, Color.start)
  drawCell(p, goal.x, goal.y, Color.goal)
}
