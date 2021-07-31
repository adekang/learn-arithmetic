class Queue {
	p: number[] = []
	q: number[] = []

	appendTail(value: number): void {
		this.p.push(value)
	}

  deleteHead():number {

    if(this.q.length){
      return this.q.pop()
    }
    while(this.p.length){
      this.q.push(this.p.pop())
    }
    return !this.q.length && -1 || this.q.pop() as number
  }
}
