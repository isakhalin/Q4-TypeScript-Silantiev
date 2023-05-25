import { renderBlock } from './lib.js';
// console.log(new Date().toISOString().slice(0,10));
// Текущая дата
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let currentDay = currentDate.getDate();
let currentDateLocale = currentDate.toLocaleDateString('en-ca');
// Следующий день за текущим
let nextDay = new Date(currentYear, currentMonth, currentDay + 1).toLocaleDateString('en-ca');
const getLastDayOfNextMonth = ({ year, month }) => {
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
            <input id="check-in-date" type="date" value="${nextDay}" min="${currentDateLocale}" max="${getLastDayOfNextMonth({ year: currentYear, month: currentMonth })}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${nextDay}" min="${currentDateLocale}" max="${getLastDayOfNextMonth({ year: currentYear, month: currentMonth })}" name="checkout" />
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFVBQVUsQ0FBQTtBQUVwQyxxREFBcUQ7QUFFckQsZUFBZTtBQUNmLElBQUksV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDN0IsSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzVDLElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMxQyxJQUFJLFVBQVUsR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7QUFFdkMsSUFBSSxpQkFBaUIsR0FBRyxXQUFXLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFaEUsNEJBQTRCO0FBQzVCLElBQUksT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBTzlGLE1BQU0scUJBQXFCLEdBQUcsQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQXlCLEVBQUcsRUFBRTtJQUN2RSxJQUFJLFNBQVMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLElBQUksU0FBUyxHQUFHLEVBQUUsRUFBRTtRQUNsQixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMxRTtTQUFNO1FBQ0wsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2pFO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsTUFBTSxVQUFVLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxVQUFVO0lBQzNELFdBQVcsQ0FDVCxtQkFBbUIsRUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OzJEQWlCdUQsT0FBTyxVQUFVLGlCQUFpQixVQUFVLHFCQUFxQixDQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFDLENBQUM7Ozs7NERBSTFHLE9BQU8sVUFBVSxpQkFBaUIsVUFBVSxxQkFBcUIsQ0FBQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBQyxDQUFDOzs7Ozs7Ozs7Ozs7S0FZbEssQ0FDRixDQUFBO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVuZGVyQmxvY2t9IGZyb20gJy4vbGliLmpzJ1xuXG4vLyBjb25zb2xlLmxvZyhuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxMCkpO1xuXG4vLyDQotC10LrRg9GJ0LDRjyDQtNCw0YLQsFxubGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbmxldCBjdXJyZW50WWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG5sZXQgY3VycmVudE1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbmxldCBjdXJyZW50RGF5ID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xuXG5sZXQgY3VycmVudERhdGVMb2NhbGUgPSBjdXJyZW50RGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLWNhJyk7XG5cbi8vINCh0LvQtdC00YPRjtGJ0LjQuSDQtNC10L3RjCDQt9CwINGC0LXQutGD0YnQuNC8XG5sZXQgbmV4dERheSA9IG5ldyBEYXRlKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGgsIGN1cnJlbnREYXkgKyAxKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLWNhJyk7XG5cbmludGVyZmFjZSBJR2V0TGFzdERheU9mTmV4dE1vbnRoIHtcbiAgeWVhcjogbnVtYmVyO1xuICBtb250aDogbnVtYmVyO1xufVxuXG5jb25zdCBnZXRMYXN0RGF5T2ZOZXh0TW9udGggPSAoe3llYXIsIG1vbnRofTogSUdldExhc3REYXlPZk5leHRNb250aCApID0+IHtcbiAgbGV0IG5leHRNb250aCA9IG1vbnRoICsgMjtcbiAgaWYgKG5leHRNb250aCA+IDExKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIgKyAxLCBuZXh0TW9udGggLSAxMiwgMCkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1jYScpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBuZXh0TW9udGgsIDApLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tY2EnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoRm9ybUJsb2NrKGFycml2YWxEYXRlLCBkZXBhcnREYXRlKSB7XG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtZm9ybS1ibG9jaycsXG4gICAgYFxuICAgIDxmb3JtPlxuICAgICAgPGZpZWxkc2V0IGNsYXNzPVwic2VhcmNoLWZpbGVkc2V0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNpdHlcIj7Qk9C+0YDQvtC0PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNpdHlcIiB0eXBlPVwidGV4dFwiIGRpc2FibGVkIHZhbHVlPVwi0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LNcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBkaXNhYmxlZCB2YWx1ZT1cIjU5LjkzODYsMzAuMzE0MVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJwcm92aWRlcnNcIj5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJob215XCIgY2hlY2tlZCAvPiBIb215PC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJmbGF0LXJlbnRcIiBjaGVja2VkIC8+IEZsYXRSZW50PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj4tLSE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay1pbi1kYXRlXCI+0JTQsNGC0LAg0LfQsNC10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrLWluLWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtuZXh0RGF5fVwiIG1pbj1cIiR7Y3VycmVudERhdGVMb2NhbGV9XCIgbWF4PVwiJHtnZXRMYXN0RGF5T2ZOZXh0TW9udGgoe3llYXI6IGN1cnJlbnRZZWFyLCBtb250aDogY3VycmVudE1vbnRofSl9XCIgbmFtZT1cImNoZWNraW5cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2stb3V0LWRhdGVcIj7QlNCw0YLQsCDQstGL0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2stb3V0LWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtuZXh0RGF5fVwiIG1pbj1cIiR7Y3VycmVudERhdGVMb2NhbGV9XCIgbWF4PVwiJHtnZXRMYXN0RGF5T2ZOZXh0TW9udGgoe3llYXI6IGN1cnJlbnRZZWFyLCBtb250aDogY3VycmVudE1vbnRofSl9XCIgbmFtZT1cImNoZWNrb3V0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1heC1wcmljZVwiPtCc0LDQutGBLiDRhtC10L3QsCDRgdGD0YLQvtC6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm1heC1wcmljZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiBuYW1lPVwicHJpY2VcIiBjbGFzcz1cIm1heC1wcmljZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+PGJ1dHRvbj7QndCw0LnRgtC4PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L2Zvcm0+XG4gICAgYFxuICApXG59XG4iXX0=