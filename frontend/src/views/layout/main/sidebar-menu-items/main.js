// assets
import { IconPalette, IconListNumbers, IconFlame, IconLayoutGrid, IconPlayerPlay } from '@tabler/icons';

// constant
const icons = {
  IconPalette,
  IconListNumbers,
  IconFlame,
  IconLayoutGrid,
  IconPlayerPlay,
};

// ==============================|| MAIN MENU ITEMS ||============================== //

const main = {
  id: 'main-menu',
  title: 'Main',
  type: 'group',
  children: [
    {
      id: 'main-menu-rank',
      title: 'Rank',
      type: 'item',
      url: '/rank',
      icon: icons.IconListNumbers,
      breadcrumbs: false,
    },
    {
      id: 'main-menu-hot',
      title: 'Hot',
      type: 'item',
      url: '/hot',
      icon: icons.IconFlame,
      breadcrumbs: false,
    },
    {
      id: 'main-menu-contents',
      title: 'Contents',
      type: 'item',
      url: '/contents',
      icon: icons.IconLayoutGrid,
      breadcrumbs: false,
    },
    {
      id: 'main-menu-videos',
      title: 'Videos',
      type: 'item',
      url: '/videos',
      icon: icons.IconPlayerPlay,
      breadcrumbs: false,
    },
  ],
};

export default main;
