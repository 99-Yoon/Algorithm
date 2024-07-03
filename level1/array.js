//자연수 뒤집어 배열로 만들기
//자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
function solution(n) {
    const str = n.toString()
    let answer = []
    for (let i = str.length - 1; i >= 0; i--) {
        answer.push(Number(str[i]))
    }
    return answer;
}

//정수 내림차순으로 배치하기
//함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.
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