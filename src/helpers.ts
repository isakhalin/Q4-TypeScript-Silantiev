import {IUser, SearchFormData} from "./interfeces";

export function serialize(value: unknown) : string | null {
  // if (value == null) {
  //   return value + ''
  // }
  if (typeof value === 'string') {
    if (!isNaN(parseInt(value)) && !isNaN(parseFloat(value))) {
      // console.log('число', value)
      return value
    }

    if (typeof JSON.parse(value) === 'object') {
      // debugger
      // console.log('обьект', value)
      return value
    }
}
// остальные типы будем просто
// приводить к строке
//   console.log('Неверные данные: ', value)
  return null
}

export function renderSearchResult (dataFromForm:SearchFormData) : void {
  console.log('Данные для поиска: ', dataFromForm)
}
