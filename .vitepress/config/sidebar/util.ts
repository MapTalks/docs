import { DefaultTheme } from "vitepress";

export function getSidebarItems(items: any[], locale?: string) {
  let textProp = locale;
  if (!textProp) {
    textProp = 'text';
  }

  const targetItems = [] as DefaultTheme.SidebarItem[];
  for (let i = 0; i < items.length; i++) {
    const item: DefaultTheme.SidebarItem = {
      text: items[i][textProp]
    };
    if (items[i].link) {
      item.link = items[i].link;
    }
    if (items[i].collapsed !== undefined) {
      item.collapsed = !!items[i].collapsed;
    }
    if (items[i].items) {
      item.items = getSidebarItems(items[i].items, locale);
    }
    targetItems[i] = item;
  }

  return targetItems;
}
