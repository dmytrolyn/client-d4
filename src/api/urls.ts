const BASE_URL = "https://d4-heroku-sv-46383bd0cef9.herokuapp.com/";

export const cveUrls = {
  all: `${BASE_URL}/get/all`,
  new: `${BASE_URL}/get/new`,
  critical: `${BASE_URL}/get/critical`,
  search: (key: string) => `${BASE_URL}/get?key=${key}`,
};

export const infoUrl = `${BASE_URL}/info`;
