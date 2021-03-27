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
        href: 'https://exchange.mozartfinance.io/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.mozartfinance.io/#/pool',
      },
    ],
  },
  {
    label: 'Piano Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Piano Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/mozartfinance',
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
