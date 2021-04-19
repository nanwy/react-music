interface IMenuItem {
  title: string;
  link: string;
}

interface IMenu {
  title?: string;
  items: IMenuItem[];
}


export const HomeLinks: IMenu[] = [
  {
    items: [
      {
        title: '发现音乐',
        link: '/discover'
      },
      {
        title: '视频',
        link: '/video'
      },
      {
        title: '朋友',
        link: '/friend'
      },
      {
        title: '直播',
        link: '/live'
      },
      {
        title: '私人FM',
        link: '/private'
      },
    ]
  },
  {
    title: '我的音乐',
    items: [
      {
        title: '本地音乐',
        link: '/local'
      },
      {
        title: '下载管理',
        link: '/download'
      },
      {
        title: '我的音乐云盘',
        link: '/mymusic'
      },
      {
        title: '我的电台',
        link: '/dian'
      },
      {
        title: '我的收藏',
        link: '/star'
      },
    ]
  },

]

export const recommendMenu:IMenuItem[] = [
  {
    title:'个性推荐',
    link:"/discover/recommend"
  },
  {
    title:'歌单',
    link:"/discover/songs"
  },
  {
    title:'主播电台',
    link:"/discover/djradio"
  },
  {
    title:'排行榜',
    link:"/discover/ranking"
  },
  {
    title:'歌手',
    link:"/discover/artist"
  },
  {
    title:'最新音乐',
    link:"/discover/newsong"
  },
]