import * as res from './res.mock.json'
const random = '东京奥运会开幕式将在东京新国立竞技场举行'.split('')

export const getMockData = function (total, modulus, height) {
  const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const list = {}
  let idx = 0
  for (let index = 0; index <= total; index++) {
    if (!list[keys[idx]]) {
      list[keys[idx]] = []
    }
    if (index % modulus == 0) {
      list[keys[idx]].push({
        title: keys[idx],
        id: keys[idx],
        value: '',
        position: index * height
      },
      {
        title: '',
        id: index,
        value: random[Math.ceil(Math.random() * 20 + 1)] + keys[idx] + index,
        position: index * height,
        checked: false
      })
    } else {
      list[keys[idx]].push({
        title: '',
        id: index,
        value: random[Math.ceil(Math.random() * 20 + 1)] + keys[idx] + index,
        position: index * height,
        checked: false
      })
    }
    if (index % modulus == 0) {
      idx++
      list[keys[idx]] = []
    }
  }

  const res = []
  for (const key in list) {
    res.push(...list[key])
  }
  res.forEach((item, index) => {
    item.position = index * height
  })
  const data = []
  for (let i = 0; i < 1000; i++) {
    data.push({ id: i, value: i })
  }

  const letters = []
  let position = 0
  for (const key in list) {
    if (key == 'undefined') break
    if (key !== 'A') {
      position += (list[key].length) * height
    }
    letters.push({
      letter: key,
      position: position
    })
  }

  return {
    data,
    res,
    letters,
    list,
    random
  }
}

export const getListMock = function (height) {
  const result = res.default
  const tempObj = {}
  let key = ''
  for (let index = 0; index < result.length; index++) {
    if (result[index].title) {
      key = result[index].title
      tempObj[key] = []
      tempObj[key].push({
        'title': key,
        'id': key,
        'value': '',
        'position': index * height
      })
    } else {
      tempObj[key].push({
        'title': '',
        'id': index,
        'value': random[Math.ceil(Math.random() * 20 + 1)] + index + Math.round(Math.random() * 3 + 1),
        'position': index * height
      })
    }
  }
  // console.log(result)
  return tempObj
}
