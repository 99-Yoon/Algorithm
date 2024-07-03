//문자열 내 p와 y의 개수
//대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
//예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

function solution(s) {
    let pnum = 0
    let ynum = 0
    for (let a of s) {
        if (a === 'p' || a === 'P') {
            pnum++
        } else if (a === 'y' || a === 'Y') {
            ynum++
        }
    }
    return pnum === ynum;
}

//문자열을 정수로 바꾸기
//문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.
//예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
function solution(s) {
    const num = Number(s)
    return num;
}

//자릿수 더하기
//자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
//예를 들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
function solution(n) {
    const str = n.toString()
    let answer = 0
    for (let s of str) {
        const a = Number(s)
        answer = answer + a
    }
    return answer;
}