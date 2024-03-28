export function getSidebarItems(items: any[], locale?: string) {
  let textProp = locale;
  if (!locale || locale === 'default') {
    textProp = 'text'
  }
  let prefix = '';
  switch (type) {
  case 'english':
    prefix = 'en';
    break;
  }

  const targetItems = [];
  for (let i = 0; i < items.length; i++) {
    const item = {
      text: items[i][textProp]
    };
    if (items[i].link) {
      item.link = prefix + items[i].link;
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
