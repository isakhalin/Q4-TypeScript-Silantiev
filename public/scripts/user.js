import { renderBlock } from './lib.js';
export function renderUserBlock({ userName, avatarLink, favoriteItemsAmount }) {
    const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет';
    const hasFavoriteItems = favoriteItemsAmount > 0;
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src=${avatarLink} alt=${userName} />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFRdEMsTUFBTSxVQUFVLGVBQWUsQ0FBRSxFQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsbUJBQW1CLEVBQW1CO0lBQzVGLE1BQU0sZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFDbEYsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsR0FBRyxDQUFDLENBQUM7SUFFakQsV0FBVyxDQUNULFlBQVksRUFDWjs7Z0NBRTRCLFVBQVUsUUFBUSxRQUFROzs0QkFFOUIsUUFBUTs7a0NBRUYsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLGdCQUFnQjs7OztLQUl2RixDQUNGLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcydcblxuaW50ZXJmYWNlIElSZW5kZXJVc2VyQmxvY2sge1xuICB1c2VyTmFtZTogc3RyaW5nO1xuICBhdmF0YXJMaW5rOiBzdHJpbmc7XG4gIGZhdm9yaXRlSXRlbXNBbW91bnQ6IG51bWJlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVXNlckJsb2NrICh7dXNlck5hbWUsIGF2YXRhckxpbmssIGZhdm9yaXRlSXRlbXNBbW91bnR9OiBJUmVuZGVyVXNlckJsb2NrKTogdm9pZCB7XG4gIGNvbnN0IGZhdm9yaXRlc0NhcHRpb24gPSBmYXZvcml0ZUl0ZW1zQW1vdW50ID8gZmF2b3JpdGVJdGVtc0Ftb3VudCA6ICfQvdC40YfQtdCz0L4g0L3QtdGCJztcbiAgY29uc3QgaGFzRmF2b3JpdGVJdGVtcyA9IGZhdm9yaXRlSXRlbXNBbW91bnQgPiAwO1xuXG4gIHJlbmRlckJsb2NrKFxuICAgICd1c2VyLWJsb2NrJyxcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlci1jb250YWluZXJcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJhdmF0YXJcIiBzcmM9JHthdmF0YXJMaW5rfSBhbHQ9JHt1c2VyTmFtZX0gLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+JHt1c2VyTmFtZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJmYXZcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaGVhcnQtaWNvbiR7aGFzRmF2b3JpdGVJdGVtcyA/ICcgYWN0aXZlJyA6ICcnfVwiPjwvaT4ke2Zhdm9yaXRlc0NhcHRpb259XG4gICAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICApXG59XG4iXX0=