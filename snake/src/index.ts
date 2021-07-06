import './style/index.less'

class Food {
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById('food');
  }

  get X() {
    return this.element.offsetLeft
  }

  get Y() {
    return this.element.offsetTop
  }

  change() {
    let left = Math.round(Math.random() * 45) * 10
    let top = Math.round(Math.random() * 34) * 10
    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }
}

class ScorePanel {
  score = 0
  level = 1
  scoreEle: HTMLElement
  levelEle: HTMLElement
  maxLevel: number;

  constructor(maxLevel: number = 10) {
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
    this.maxLevel = maxLevel
  }

  addScore() {
    this.scoreEle.innerHTML = ++this.score + ''
    if (this.score !== 0 && this.score % 10 === 0) {
      console.log('aaa');     
      this.levelUp()
    }
  }



  levelUp() {
    if (this.level <= this.maxLevel) {
      this.levelEle.innerHTML = this.level++ + ''
    }

  }
}

// const food = new Food();
// food.change();
// console.log(food.X, food.Y);

const s = new ScorePanel()
for (let i = 0; i <200; i++) {
  s.addScore()
}