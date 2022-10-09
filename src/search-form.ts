import { renderBlock } from './lib.js'

const convertDate = (date: Date): string => {
  const convertedDate = date.toLocaleDateString().split('.')
  return convertedDate[2] + "-" + convertedDate[1] + "-" + convertedDate[0];
}

export function renderSearchFormBlock () {
  const date = new Date();
  const currentDate = convertDate(date);
  const outDate = convertDate(new Date(date.getTime() + (1000 * 60 * 60 * 24 * 2)));
  const nextMonth = date.getMonth() + 2
  const lastDayInNextMonth = convertDate(new Date(date.getFullYear(), nextMonth, 0));

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
            <input id="check-in-date" type="date" value=${currentDate} min=${currentDate} max=${lastDayInNextMonth} name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${outDate} min=${currentDate} max=${lastDayInNextMonth} name="checkout" />
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
