function formatList(items) {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0]
  if (items.length === 1) return `${items[0]} and {items[1]} `;
  const lastItem = items.pop();
  return `${items.join(",")} ,and  ${lastItem}` 
}

//For the purpose of user debugging.
formatList(["apple", "banana"]);

module.exports = formatList;