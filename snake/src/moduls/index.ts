// 游戏控制器

import Food from "./Food.ts";
import Snake from "./Snake.ts";
import ScorePanel from "./ScorePanel.ts";

class Game{
  food :Food
  snake:Snake
  scorePanel: ScorePanel

  constructor(){
    this.food = new Food()
    this.snake = new Snake()
    this.scorePanel = new ScorePanel()
    this.init()
  }

  // 初始化游戏
  init(){
    // 绑定键盘事件
    document.addEventListener('keydown',this.keydownHandler)
  }

  keydownHandler(e:KeyboardEvent){
    console.log(e.key);
  }

}

export default Game
