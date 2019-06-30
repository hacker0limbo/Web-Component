class Carousel {
  constructor(root) {
    this.root = root
    this.panels = Array.from(root.querySelectorAll('.panels a'))
    this.dotCt = root.querySelector('.dots')
    this.dots = Array.from(root.querySelectorAll('.dots span'))
    this.pre = root.querySelector('.pre')
    this.next = root.querySelector('.next')

    this.bind()
  }

  get index() {
    return this.dots.indexOf(this.root.querySelector('.dots .active'))
  }

  get preIndex() {
    return (this.index - 1 + this.dots.length) % this.dots.length
  }

  get nextIndex () {
    return (this.index + 1) % this.dots.length
  }

  bind() {
    this.dotCt.onclick = e => {
      if (e.target.tagName !== 'SPAN') {
        return 
      } 
      const index = this.dots.indexOf(e.target)
      this.showPage(index)       

      this.setDot(index)
    }

    this.pre.onclick = e => {
      this.showPage(this.preIndex)  
      this.setDot(this.preIndex)       
    }

    this.next.onclick = e => {
      this.showPage(this.nextIndex)  
      this.setDot(this.nextIndex)      
    }

  }

  setDot(index) {
    this.dots.forEach(dot => dot.classList.remove('active'))
    this.dots[index].classList.add('active')
  }

  showPage(index) {
    this.panels.forEach(panel => panel.style.zIndex = 0)
    this.panels[index].style.zIndex = 1
  }
}

new Carousel(document.querySelector('.carousel'))