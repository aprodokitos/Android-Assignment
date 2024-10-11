let siswa1 = {name: "Tono", age: 20, grade: [90, 85, 88]};
let siswa2 = {name: "Tini", age: 22, grade: [78, 82, 85]};

let mergedsiswa = {
    nama: `${siswa1.name} dan ${siswa2.name}`,
    usia: (siswa1.age + siswa2.age) / 2,
    nilai: [...siswa1.grade, ...siswa2.grade]
};

console.log(mergedsiswa);