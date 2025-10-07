const API="https://api.themoviedb.org/"
export function  get(path){
    return fetch(API+path,{
        headers:{
            Autorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWIxYjQ1OWU3ODU0ZjAwYTY3ZDJlYTkxMjkwZWUwYSIsIm5iZiI6MTc1OTg0OTI1NC4xNzkwMDAxLCJzdWIiOiI2OGU1MmIyNjAwYTg2ZTRkZGQ5NjFmZDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.C3Rg5wdqYo-Gcwq7F3ef8aTuDrONWm7jYWKxEDpCnQg",
            "Content-Type": "application/json; charset=utf-8"
        },
    }).then((result) => result.json());
}