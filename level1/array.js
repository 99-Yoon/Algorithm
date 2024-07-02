//배열 두 배 만들기
//정수 배열 numbers가 매개변수로 주어집니다. 
//numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
function solution(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i] * 2
    }
    return numbers;
}

//배열의 평균값
//정수 배열 numbers가 매개변수로 주어집니다. 
//numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
function solution(numbers) {
    let answer = 0
    for (let i = 0; i < numbers.length; i++) {
        answer = answer + numbers[i]
    }
    return answer / numbers.length;
}