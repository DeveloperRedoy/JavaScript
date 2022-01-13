const str1 = "Hello World ! R";
const str2 = "Hello World ! Redoy";

const v = str2.match(str1);

// localeCompare smoll and big string calculation
// -1 if sorted before
// 1 if sorted after
// 0 if equal Works according to the index

document.write(v);