interface SideBarItem {
  id: number,
  icon: string,
  title: string,
  isActive: boolean,
  hasBadge: boolean,
  badgeNumber: number,
}

const items: SideBarItem[] = [
  { id: 1, icon: "ic:round-home", title: "home", isActive: false, hasBadge: false, badgeNumber: 0 },
  { id: 2, icon: "icomoon-free:stats-bars", title: "charts", isActive: true, hasBadge: true, badgeNumber: 0 },
  { id: 3, icon: "mingcute:transfer-fill", title: "exchange", isActive: false, hasBadge: false, badgeNumber: 0 },
  { id: 4, icon: "gg:games", title: "game", isActive: false, hasBadge: false, badgeNumber: 0 },
  { id: 5, icon: "mdi:users", title: "users", isActive: false, hasBadge: true, badgeNumber: 9 },
  { id: 6, icon: "uil:setting", title: "setting", isActive: false, hasBadge: false, badgeNumber: 0 },
  { id: 7, icon: "tabler:dots", title: "dots", isActive: false, hasBadge: false, badgeNumber: 0 },
];

export default items;