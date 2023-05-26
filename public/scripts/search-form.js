import { renderBlock } from './lib.js';
// console.log(new Date().toISOString().slice(0,10));
// Текущая дата
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFVBQVUsQ0FBQTtBQUVwQyxxREFBcUQ7QUFFckQsZUFBZTtBQUNmLE1BQU0sV0FBVyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7QUFDckMsTUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzlDLE1BQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QyxNQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7QUFFekMsSUFBSSxpQkFBaUIsR0FBRyxXQUFXLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFaEUsNEJBQTRCO0FBQzVCLElBQUksT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBTzlGLE1BQU0scUJBQXFCLEdBQUcsQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQXlCLEVBQUcsRUFBRTtJQUN2RSxJQUFJLFNBQVMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLElBQUksU0FBUyxHQUFHLEVBQUUsRUFBRTtRQUNsQixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMxRTtTQUFNO1FBQ0wsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2pFO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsTUFBTSxVQUFVLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxVQUFVO0lBQzNELFdBQVcsQ0FDVCxtQkFBbUIsRUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OzJEQWlCdUQsT0FBTyxVQUFVLGlCQUFpQixVQUFVLHFCQUFxQixDQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFDLENBQUM7Ozs7NERBSTFHLE9BQU8sVUFBVSxpQkFBaUIsVUFBVSxxQkFBcUIsQ0FBQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBQyxDQUFDOzs7Ozs7Ozs7Ozs7S0FZbEssQ0FDRixDQUFBO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVuZGVyQmxvY2t9IGZyb20gJy4vbGliLmpzJ1xuXG4vLyBjb25zb2xlLmxvZyhuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxMCkpO1xuXG4vLyDQotC10LrRg9GJ0LDRjyDQtNCw0YLQsFxuY29uc3QgY3VycmVudERhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuY29uc3QgY3VycmVudFllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuY29uc3QgY3VycmVudE1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbmNvbnN0IGN1cnJlbnREYXkgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCk7XG5cbmxldCBjdXJyZW50RGF0ZUxvY2FsZSA9IGN1cnJlbnREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tY2EnKTtcblxuLy8g0KHQu9C10LTRg9GO0YnQuNC5INC00LXQvdGMINC30LAg0YLQtdC60YPRidC40LxcbmxldCBuZXh0RGF5ID0gbmV3IERhdGUoY3VycmVudFllYXIsIGN1cnJlbnRNb250aCwgY3VycmVudERheSArIDEpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tY2EnKTtcblxuaW50ZXJmYWNlIElHZXRMYXN0RGF5T2ZOZXh0TW9udGgge1xuICB5ZWFyOiBudW1iZXI7XG4gIG1vbnRoOiBudW1iZXI7XG59XG5cbmNvbnN0IGdldExhc3REYXlPZk5leHRNb250aCA9ICh7eWVhciwgbW9udGh9OiBJR2V0TGFzdERheU9mTmV4dE1vbnRoICkgPT4ge1xuICBsZXQgbmV4dE1vbnRoID0gbW9udGggKyAyO1xuICBpZiAobmV4dE1vbnRoID4gMTEpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciArIDEsIG5leHRNb250aCAtIDEyLCAwKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLWNhJyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG5leHRNb250aCwgMCkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1jYScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hGb3JtQmxvY2soYXJyaXZhbERhdGUsIGRlcGFydERhdGUpIHtcbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1mb3JtLWJsb2NrJyxcbiAgICBgXG4gICAgPGZvcm0+XG4gICAgICA8ZmllbGRzZXQgY2xhc3M9XCJzZWFyY2gtZmlsZWRzZXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPtCT0L7RgNC+0LQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2l0eVwiIHR5cGU9XCJ0ZXh0XCIgZGlzYWJsZWQgdmFsdWU9XCLQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs1wiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGRpc2FibGVkIHZhbHVlPVwiNTkuOTM4NiwzMC4zMTQxXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInByb3ZpZGVyc1wiPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImhvbXlcIiBjaGVja2VkIC8+IEhvbXk8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImZsYXQtcmVudFwiIGNoZWNrZWQgLz4gRmxhdFJlbnQ8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2Pi0tIT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLWluLWRhdGVcIj7QlNCw0YLQsCDQt9Cw0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2staW4tZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke25leHREYXl9XCIgbWluPVwiJHtjdXJyZW50RGF0ZUxvY2FsZX1cIiBtYXg9XCIke2dldExhc3REYXlPZk5leHRNb250aCh7eWVhcjogY3VycmVudFllYXIsIG1vbnRoOiBjdXJyZW50TW9udGh9KX1cIiBuYW1lPVwiY2hlY2tpblwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay1vdXQtZGF0ZVwiPtCU0LDRgtCwINCy0YvQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjay1vdXQtZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke25leHREYXl9XCIgbWluPVwiJHtjdXJyZW50RGF0ZUxvY2FsZX1cIiBtYXg9XCIke2dldExhc3REYXlPZk5leHRNb250aCh7eWVhcjogY3VycmVudFllYXIsIG1vbnRoOiBjdXJyZW50TW9udGh9KX1cIiBuYW1lPVwiY2hlY2tvdXRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibWF4LXByaWNlXCI+0JzQsNC60YEuINGG0LXQvdCwINGB0YPRgtC+0Lo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwibWF4LXByaWNlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIG5hbWU9XCJwcmljZVwiIGNsYXNzPVwibWF4LXByaWNlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj48YnV0dG9uPtCd0LDQudGC0Lg8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvZm9ybT5cbiAgICBgXG4gIClcbn1cbiJdfQ==