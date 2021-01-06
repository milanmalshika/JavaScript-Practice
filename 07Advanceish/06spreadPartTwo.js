function sumTwo(a, b, ...args) {
    let sum = 0;
    let multi = a*b;
    for (const arg of args) {
        sum += arg;
    }
    
    return [multi, sum];
}

console.log(sumTwo(1, 2, 3, 4, 5));     // mehidi mul element deka "a" ha "b" widiyta arn multiplication eka sidukarai
                                        // 3n weni element eke idla tika tamai arg widiyta gihilla sum eken addition eka calculate krnne