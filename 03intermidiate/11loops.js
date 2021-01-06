var arr = ["Milan", "Malshika", "Nanayakkara", 32, "Dilshan"];

for(let i=0; i<arr.length; i++) {
    if(typeof arr[i] != 'string') continue;
    console.log(arr[i]);
}