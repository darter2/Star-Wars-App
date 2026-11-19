const API_BASE_URL = "https://www.swapi.tech/api";

async function fetchCollection(path, getName, isPaginated) {
  let url = `${API_BASE_URL}/${path}`;
  const names = [];

  while (url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Could not load ${path} (HTTP ${response.status}).`);
    }

    const payload = await response.json();
    const records = isPaginated ? payload.results : payload.result;
    if (!Array.isArray(records)) {
      throw new Error(`The ${path} API response did not contain a list.`);
    }

    names.push(
      ...records.map((record) => {
        const name = getName(record);
        if (typeof name !== "string") {
          throw new Error(`The ${path} API returned an item without a name.`);
        }
        return name;
      })
    );

    url = isPaginated ? payload.next : null;
  }

  return names;
}

export function getPlanets() {
  return fetchCollection("planets", (planet) => planet.name, true);
}

export function getFilms() {
  return fetchCollection("films", (film) => film.properties?.title, false);
}

export function getStarships() {
  return fetchCollection("starships", (starship) => starship.name, true);
}
