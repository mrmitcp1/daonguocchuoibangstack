export class Stack<T> {
    container:T[] = [];
    constructor() {
    }
    push(n : T){
        return this.container.push(n)
    }
    pop(){
        return this.container.pop()
    }
    size(){
        return this.container.length
    }

    reverse(){
        let reverseArr=[];
        while (this.size()!==0){
            reverseArr.push(stack.pop())
        }
        return reverseArr
    }
}
let stack=new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack)
console.log(stack.reverse())