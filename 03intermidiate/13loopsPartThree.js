const names = ["Youtube", "Facebook", "Linedin", "Instagram", "Github"];

for(const n of names) {
    console.log(n);
}

const symbols = {
    yt : "Youtube",
    fb : "Face Book",
    li : "Linked In"
}

for(const n in symbols) {
    console.log(n);
}

for (const n in symbols) {
  console.log(`key is ${n} and value is ${symbols[n]}`);
}