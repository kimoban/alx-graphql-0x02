
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

const endpoint = 'https://rickandmortyapi.com/graphql';
const ids = [1, 2, 3, 4];
const pages = [1, 2, 3, 4];
const characterQuery = (id) => `query { character(id: ${id}) { id name status species type gender } }`;
const charactersPageQuery = (page) => `query { characters(page: ${page}) { results { id name status image } } }`;
const episodeQuery = (id) => `query { episode(id: ${id}) { id name air_date episode } }`;

async function fetchAndSaveCharactersPageToEpisode(page) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: charactersPageQuery(page) })
  });
  const data = await res.json();
  fs.writeFileSync(
    path.join(process.cwd(), 'episode', `characters-page-${page}-output.json`),
    JSON.stringify(data, null, 2)
  );
  console.log(`Saved episode/characters-page-${page}-output.json`);
}

(async () => {
  for (const id of ids) {
    await fetchAndSaveCharacter(id);
  }
  for (const page of pages) {
    await fetchAndSaveCharactersPage(page);
  }
  await fetchAndSaveEpisode(1);
  for (const page of pages) {
    await fetchAndSaveCharactersPageToEpisode(page);
  }
})();

async function fetchAndSaveEpisode(id) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: episodeQuery(id) })
  });
  const data = await res.json();
  fs.writeFileSync(
    path.join(process.cwd(), 'episode', `episode-id-${id}-output.json`),
    JSON.stringify(data, null, 2)
  );
  console.log(`Saved episode-id-${id}-output.json`);
}


async function fetchAndSaveCharacter(id) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: characterQuery(id) })
  });
  const data = await res.json();
  fs.writeFileSync(
    path.join(process.cwd(), 'character', `character-id-${id}-output.json`),
    JSON.stringify(data, null, 2)
  );
  console.log(`Saved character-id-${id}-output.json`);
}

async function fetchAndSaveCharactersPage(page) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: charactersPageQuery(page) })
  });
  const data = await res.json();
  fs.writeFileSync(
    path.join(process.cwd(), 'character', `characters-page-${page}-output.json`),
    JSON.stringify(data, null, 2)
  );
  console.log(`Saved characters-page-${page}-output.json`);
}



(async () => {
  for (const id of ids) {
    await fetchAndSaveCharacter(id);
  }
  for (const page of pages) {
    await fetchAndSaveCharactersPage(page);
  }
  await fetchAndSaveEpisode(1);
})();
