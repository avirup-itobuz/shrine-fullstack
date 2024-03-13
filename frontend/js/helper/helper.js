export function createElement(type, classlist, src, innertext) {
  const element = document.createElement(type);
  if (classlist && classlist.length > 0) element.classList.add(...classlist);
  if (src && type === "img") element.src = src;
  if (innertext && innertext.length > 0) element.innerText = innertext;
  return element;
}

export async function getData(url) {
  try {
    const data = await fetch(url);
    const parsedData = await data.json();
    return parsedData;
  } catch (err) {
    console.log(err);
  }
}
