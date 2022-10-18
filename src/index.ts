import {renderSearchFormBlock} from './search-form.js'
import {renderSearchStubBlock} from './search-results.js'
import {renderUserBlock} from './user.js'
import {renderToast} from './lib.js'

import {serialize} from "./helpers.js";

interface IUser {
  userName: string,
  avatarUrl: string
}
// const user: IUser = {
//   "userName":"User",
//   "avatarUrl":"/img/avatar.png"
// }

let user: IUser | null = null;
let favoritesAmount: number = 0;

const setLocalStorage = (): void => {
  localStorage.setItem('user', `{"userName":"User","avatarUrl":"/img/avatar.png"}`);
  localStorage.setItem('favoritesAmount', `-1`);
}

const getUserData = (): void => {
  setLocalStorage();
  if (serialize(localStorage.getItem('user'))) {
    user = JSON.parse(serialize(localStorage.getItem('user')));
  } else {
    console.log('не верные данные')
  }
}
getUserData();

const getFavoritesAmount = (): void => {
  if(serialize(localStorage.getItem('favoritesAmount'))) {
    favoritesAmount = +serialize(localStorage.getItem('user'));
  } else {
    console.log('не верные данные')
  }
}

getFavoritesAmount()
//
// serialize(localStorage.getItem('user'));
// serialize(localStorage.getItem('favoritesAmount'));


window.addEventListener('DOMContentLoaded', () => {
  // renderUserBlock('User', '/img/avatar.png', -1)
  renderUserBlock(user.userName, user.avatarUrl, favoritesAmount)

  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {
      name: 'Понял', handler: () => {
        console.log('Уведомление закрыто')
      }
    }
  )
})
