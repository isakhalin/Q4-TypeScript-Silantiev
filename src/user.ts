import { renderBlock } from './lib.js'

interface IRenderUserBlock {
  userName: string;
  avatarLink: string;
  favoriteItemsAmount: number
}

export function renderUserBlock ({userName, avatarLink, favoriteItemsAmount}: IRenderUserBlock): void {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет';
  const hasFavoriteItems = favoriteItemsAmount > 0;

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src=${avatarLink} alt=${userName} />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
