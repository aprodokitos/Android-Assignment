const favdata = {
    user: {
        id: 1,
        name: "Layalia",
        age: 19,
        favorites: {
            books: ["2010", "Rick Riordan", "The Lost Hero"],
            movies: ["Suckseed", "Twilight"],
        },
    },
};

const { user: { name, age, favorites: { movies } } } = favdata;

console.log(name);
console.log(age);
console.log(movies);