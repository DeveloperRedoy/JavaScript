const str1 = "Hello World !";
const str2 = "Hello World ! Redoy";

const v = str2.localeCompare(str1);

// localeCompare smoll and big string calculation
// -1 if sorted before
// 1 if sorted after
// 0 if equal Works according to the index

document.write(v);