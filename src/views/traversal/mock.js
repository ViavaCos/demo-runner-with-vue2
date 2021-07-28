function getRandomNum(min, max){
    return Math.round(Math.random() * (max-min+1)+min)
}

export default function getMock(length){
    if(!length) return []
    const MOCK = []
    // const strArr = '再夺一金杨倩搭档杨皓然夺得10米气步枪混合团体金牌'.split('')
    const strArr = '倩倩倩倩倩倩倩倩倩倩倩倩倩倩倩倩倩倩倩倩倩倩倩倩倩'.split('')
    for (let index = 0; index < length; index++) {
        const idx = getRandomNum(0, 23)
        MOCK.push({
            id: index,
            // checked: index % 2021 == 0 ? '1' : '0',
            checked: '0',
            value: strArr[idx] + index + '-' + idx
        })
    }
    return MOCK
}