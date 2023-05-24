import { renderBlock } from './lib.js';
// console.log(new Date().toISOString().slice(0,10));
// console.log(new Date().toLocaleDateString('en-ca'));
// Текущая дата
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let currentDay = currentDate.getDate();
let currentDateLocale = currentDate.toLocaleDateString('en-ca');
// Следующий день за текущим
let nextDay = new Date(currentYear, currentMonth, currentDay + 1).toLocaleDateString('en-ca');
const getLastDayOfNextMonth = (year, month) => {
    let nextMonth = month + 2;
    if (nextMonth > 11) {
        return new Date(year + 1, nextMonth - 12, 0).toLocaleDateString('en-ca');
    }
    else {
        return new Date(year, nextMonth, 0).toLocaleDateString('en-ca');
    }
};
export function renderSearchFormBlock(arrivalDate, departDate) {
    renderBlock('search-form-block', `
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
            <input id="check-in-date" type="date" value="${nextDay}" min="${currentDateLocale}" max="${getLastDayOfNextMonth(currentYear, currentMonth)}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${nextDay}" min="${currentDateLocale}" max="${getLastDayOfNextMonth(currentYear, currentMonth)}" name="checkout" />
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
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFVBQVUsQ0FBQTtBQUVwQyxxREFBcUQ7QUFDckQsdURBQXVEO0FBRXZELGVBQWU7QUFDZixJQUFJLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQzdCLElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM1QyxJQUFJLFlBQVksR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDMUMsSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBRXZDLElBQUksaUJBQWlCLEdBQUcsV0FBVyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRWhFLDRCQUE0QjtBQUM1QixJQUFJLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUU5RixNQUFNLHFCQUFxQixHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO0lBQzVDLElBQUksU0FBUyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDMUIsSUFBSSxTQUFTLEdBQUcsRUFBRSxFQUFFO1FBQ2xCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzFFO1NBQU07UUFDTCxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDakU7QUFDSCxDQUFDLENBQUE7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQUMsV0FBVyxFQUFFLFVBQVU7SUFDM0QsV0FBVyxDQUNULG1CQUFtQixFQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MkRBaUJ1RCxPQUFPLFVBQVUsaUJBQWlCLFVBQVUscUJBQXFCLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQzs7Ozs0REFJM0YsT0FBTyxVQUFVLGlCQUFpQixVQUFVLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUM7Ozs7Ozs7Ozs7OztLQVluSixDQUNGLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZW5kZXJCbG9ja30gZnJvbSAnLi9saWIuanMnXG5cbi8vIGNvbnNvbGUubG9nKG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKSk7XG4vLyBjb25zb2xlLmxvZyhuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tY2EnKSk7XG5cbi8vINCi0LXQutGD0YnQsNGPINC00LDRgtCwXG5sZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xubGV0IGN1cnJlbnRZZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbmxldCBjdXJyZW50TW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xubGV0IGN1cnJlbnREYXkgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCk7XG5cbmxldCBjdXJyZW50RGF0ZUxvY2FsZSA9IGN1cnJlbnREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tY2EnKTtcblxuLy8g0KHQu9C10LTRg9GO0YnQuNC5INC00LXQvdGMINC30LAg0YLQtdC60YPRidC40LxcbmxldCBuZXh0RGF5ID0gbmV3IERhdGUoY3VycmVudFllYXIsIGN1cnJlbnRNb250aCwgY3VycmVudERheSArIDEpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tY2EnKTtcblxuY29uc3QgZ2V0TGFzdERheU9mTmV4dE1vbnRoID0gKHllYXIsIG1vbnRoKSA9PiB7XG4gIGxldCBuZXh0TW9udGggPSBtb250aCArIDI7XG4gIGlmIChuZXh0TW9udGggPiAxMSkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyICsgMSwgbmV4dE1vbnRoIC0gMTIsIDApLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tY2EnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbmV4dE1vbnRoLCAwKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLWNhJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaEZvcm1CbG9jayhhcnJpdmFsRGF0ZSwgZGVwYXJ0RGF0ZSkge1xuICByZW5kZXJCbG9jayhcbiAgICAnc2VhcmNoLWZvcm0tYmxvY2snLFxuICAgIGBcbiAgICA8Zm9ybT5cbiAgICAgIDxmaWVsZHNldCBjbGFzcz1cInNlYXJjaC1maWxlZHNldFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaXR5XCI+0JPQvtGA0L7QtDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaXR5XCIgdHlwZT1cInRleHRcIiBkaXNhYmxlZCB2YWx1ZT1cItCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgZGlzYWJsZWQgdmFsdWU9XCI1OS45Mzg2LDMwLjMxNDFcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwicHJvdmlkZXJzXCI+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiaG9teVwiIGNoZWNrZWQgLz4gSG9teTwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiZmxhdC1yZW50XCIgY2hlY2tlZCAvPiBGbGF0UmVudDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+LS0hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2staW4tZGF0ZVwiPtCU0LDRgtCwINC30LDQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjay1pbi1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7bmV4dERheX1cIiBtaW49XCIke2N1cnJlbnREYXRlTG9jYWxlfVwiIG1heD1cIiR7Z2V0TGFzdERheU9mTmV4dE1vbnRoKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGgpfVwiIG5hbWU9XCJjaGVja2luXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLW91dC1kYXRlXCI+0JTQsNGC0LAg0LLRi9C10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrLW91dC1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7bmV4dERheX1cIiBtaW49XCIke2N1cnJlbnREYXRlTG9jYWxlfVwiIG1heD1cIiR7Z2V0TGFzdERheU9mTmV4dE1vbnRoKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGgpfVwiIG5hbWU9XCJjaGVja291dFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYXgtcHJpY2VcIj7QnNCw0LrRgS4g0YbQtdC90LAg0YHRg9GC0L7QujwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJtYXgtcHJpY2VcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgbmFtZT1cInByaWNlXCIgY2xhc3M9XCJtYXgtcHJpY2VcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PjxidXR0b24+0J3QsNC50YLQuDwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgPC9mb3JtPlxuICAgIGBcbiAgKVxufVxuIl19