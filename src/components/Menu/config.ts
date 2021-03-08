import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://mozartex.bot.hr/',
      },
      {
        label: 'Liquidity',
        href: 'http://mozartex.bot.hr//#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: '',
      },
      {
        label: 'Blog',
        href: 'https://mozart-finance.medium.com/',
      },
      {
        label: 'Docs',
        href: 'https://mozartfinance.gitbook.io/mozart-finance/',
      },
    ],
  },
]

export default config
