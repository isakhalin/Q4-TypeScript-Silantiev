import { renderBlock } from './lib.js';
export function renderUserBlock({ userName, avatarLink, favoriteItemsAmount }) {
    // const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет';
    // const hasFavoriteItems = favoriteItemsAmount > 0;
    const items = Boolean(favoriteItemsAmount) ? favoriteItemsAmount : 'ничего нет';
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src=${avatarLink} alt=${userName} />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${Boolean(favoriteItemsAmount) ? ' active' : ''}"></i>${items}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFRdEMsTUFBTSxVQUFVLGVBQWUsQ0FBRSxFQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsbUJBQW1CLEVBQW1CO0lBQzVGLHFGQUFxRjtJQUNyRixvREFBb0Q7SUFDcEQsTUFBTSxLQUFLLEdBQW9CLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO0lBRWpHLFdBQVcsQ0FDVCxZQUFZLEVBQ1o7O2dDQUU0QixVQUFVLFFBQVEsUUFBUTs7NEJBRTlCLFFBQVE7O2tDQUVGLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxLQUFLOzs7O0tBSXhGLENBQ0YsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJ1xuXG5pbnRlcmZhY2UgSVJlbmRlclVzZXJCbG9jayB7XG4gIHVzZXJOYW1lOiBzdHJpbmc7XG4gIGF2YXRhckxpbms6IHN0cmluZztcbiAgZmF2b3JpdGVJdGVtc0Ftb3VudDogbnVtYmVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJVc2VyQmxvY2sgKHt1c2VyTmFtZSwgYXZhdGFyTGluaywgZmF2b3JpdGVJdGVtc0Ftb3VudH06IElSZW5kZXJVc2VyQmxvY2spOiB2b2lkIHtcbiAgLy8gY29uc3QgZmF2b3JpdGVzQ2FwdGlvbiA9IGZhdm9yaXRlSXRlbXNBbW91bnQgPyBmYXZvcml0ZUl0ZW1zQW1vdW50IDogJ9C90LjRh9C10LPQviDQvdC10YInO1xuICAvLyBjb25zdCBoYXNGYXZvcml0ZUl0ZW1zID0gZmF2b3JpdGVJdGVtc0Ftb3VudCA+IDA7XG4gIGNvbnN0IGl0ZW1zOiBudW1iZXIgfCBzdHJpbmcgPSBCb29sZWFuKGZhdm9yaXRlSXRlbXNBbW91bnQpID8gZmF2b3JpdGVJdGVtc0Ftb3VudCA6ICfQvdC40YfQtdCz0L4g0L3QtdGCJztcbiAgXG4gIHJlbmRlckJsb2NrKFxuICAgICd1c2VyLWJsb2NrJyxcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlci1jb250YWluZXJcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJhdmF0YXJcIiBzcmM9JHthdmF0YXJMaW5rfSBhbHQ9JHt1c2VyTmFtZX0gLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+JHt1c2VyTmFtZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJmYXZcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaGVhcnQtaWNvbiR7Qm9vbGVhbihmYXZvcml0ZUl0ZW1zQW1vdW50KSA/ICcgYWN0aXZlJyA6ICcnfVwiPjwvaT4ke2l0ZW1zfVxuICAgICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKVxufVxuIl19