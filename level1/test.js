function solution(n) {
    const str = n.toString()
    let arr = []
    for (let s of str) {
        arr.push(Number(s))
    }
    arr.sort((a, b) => b - a)
    const answer = arr.join('')
    return Number(answer);
}

solution(118372)