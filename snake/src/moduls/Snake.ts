class Snake {
  // 蛇头
  head: HTMLElement

  // 身体 包括蛇头
  bodies: HTMLCollection

  // 蛇的容器
  element: HTMLElement

  constructor() {
    this.element = document.getElementById('snake')
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div')
  }

  getX() {
    return this.head.offsetLeft
  }

  getY() {
    return this.head.offsetTop
  }

  setX(value) {
    this.head.style.left = value + 'px'
  }

  setY(value) {
    this.head.style.top = value + 'px'
  }

  // 添加身体
  addBody() {
    this.element.insertAdjacentHTML("beforeend", '<div></div>')
  }

}

export default Snake