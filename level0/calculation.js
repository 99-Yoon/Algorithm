//두 수의 나눗셈
//정수 num1과 num2가 매개변수로 주어질 때, 
//num1을 num2로 나눈 값에 1,000을 곱한 후 
//정수 부분을 return 하도록 soltuion 함수를 완성해주세요.
function solution(num1, num2) {
    const answer = Math.floor(num1 / num2 * 1000)
    return answer;
}

//짝수의 합
//정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
function solution(n) {
    let answer = 0
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            answer = answer + i
        }
    }
    return answer;
}

//피자 나눠먹기(올림)
//머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 
//피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 
//필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.
function solution(n) {
    const answer = Math.ceil(n / 7)
    return answer;
}