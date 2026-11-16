const items = new Array(100).fill(null).map((v, i) => `Item ${i}`);

const BASE_URL = 'https://www.swapi.tech/api';

async function fetchCollection(path) {
  const response = await fetch(`${BASE_URL}/${path}`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  const body = await response.json();

  return body.results.map(({ uid, name }) => ({
    key: uid,
    value: name,
  }));
}

export const getFilms = () => fetchCollection('films');
export const getPlanets = () => fetchCollection('planets?page=1&limit=10');
export const getSpaceships = () => fetchCollection('starships?page=1&limit=10');


function filterAndSort(data, text, asc) {
  return data
    .filter((i) => text.length === 0 || i.includes(text))
    .sort(
      asc
        ? (a, b) => (b > a ? -1 : a === b ? 0 : 1)
        : (a, b) => (a > b ? -1 : a === b ? 0 : 1)
    );
}


export function fetchItems(filter, asc) {
  return new Promise((resolve) => {
    resolve({
      json: () =>
        Promise.resolve({
          items: filterAndSort(items, filter, asc),
        }),
    });
  });
}