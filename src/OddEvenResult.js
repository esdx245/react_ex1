const OddEvenResult = ({ count }) => {//prop으로 count 하나만 받아올 것이기 때문에 {}로 감싸서 바로 접근 가능
    return <>{count%2 === 0? "짝수": "홀수"}</>
}

export default OddEvenResult;