// assets
import { IconListNumbers, IconFlame, IconLayoutGrid, IconPlayerPlay, IconUsers } from '@tabler/icons';

// constant
const icons = {
  IconListNumbers,
  IconFlame,
  IconLayoutGrid,
  IconPlayerPlay,
  IconUsers,
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
    {
      id: 'main-menu-character',
      title: 'Characters',
      type: 'item',
      url: '/characters',
      icon: icons.IconUsers,
      breadcrumbs: false,
    },
  ],
};

export default main;
