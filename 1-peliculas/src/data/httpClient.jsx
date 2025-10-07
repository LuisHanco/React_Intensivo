const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        // ¡Se agregó 'Bearer ' antes del token!
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWIxYjQ1OWU3ODU0ZjAwYTY3ZDJlYTkxMjkwZWUwYSIsIm5iZiI6MTc1OTg0OTI1NC4xNzkwMDAxLCJzdWI6IjY4ZTUyYjI2MDBhODZlNGRkZDk2MWZkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C3Rg5wdqYo-Gcwq7F3ef8aTuDrONWm7jYWKxEDpCnQg",
      "Content-Type": "application/json; charset=utf-8",
    },
  }).then((result) => result.json());
}