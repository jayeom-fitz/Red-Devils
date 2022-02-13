// assets
import { IconBallFootball, IconNews, IconPhoto, IconMessageCircle, IconFlame, IconLayoutGrid, IconPlayerPlay, IconUsers } from '@tabler/icons';

// constant
const icons = {
  IconLayoutGrid,
  IconNews,
  IconPlayerPlay,
  IconPhoto,
  IconMessageCircle,
  IconBallFootball,
};

// ==============================|| MAIN MENU ITEMS ||============================== //

const main = {
  id: 'main-menu',
  title: 'Main',
  type: 'group',
  children: [
    {
      id: 'main-menu-content',
      title: 'Content',
      type: 'item',
      url: '/content',
      icon: icons.IconLayoutGrid,
      breadcrumbs: false,
    },

    {
      id: 'main-menu-club',
      title: 'Club',
      type: 'collapse',
      icon: icons.IconBallFootball,
      children: [],
    },
  ],
};

export default main;
