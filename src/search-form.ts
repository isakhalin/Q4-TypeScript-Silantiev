import {renderBlock} from './lib.js'

// console.log(new Date().toISOString().slice(0,10));

// Текущая дата
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let currentDay = currentDate.getDate();

let currentDateLocale = currentDate.toLocaleDateString('en-ca');

// Следующий день за текущим
let nextDay = new Date(currentYear, currentMonth, currentDay + 1).toLocaleDateString('en-ca');

interface IGetLastDayOfNextMonth {
  year: number;
  month: number;
}

const getLastDayOfNextMonth = ({year, month}: IGetLastDayOfNextMonth ) => {
  let nextMonth = month + 2;
  if (nextMonth > 11) {
    return new Date(year + 1, nextMonth - 12, 0).toLocaleDateString('en-ca');
  } else {
    return new Date(year, nextMonth, 0).toLocaleDateString('en-ca');
  }
}

export function renderSearchFormBlock(arrivalDate, departDate) {
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${nextDay}" min="${currentDateLocale}" max="${getLastDayOfNextMonth({year: currentYear, month: currentMonth})}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${nextDay}" min="${currentDateLocale}" max="${getLastDayOfNextMonth({year: currentYear, month: currentMonth})}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
