function fibonacciSeq() {
    const n1 = 0;
    const n2 = 1;
    let nterm;

    for (let i = 1; i <= 10; i++) {
        console.log(n1);
        nterm = n1 + n2;
        n1 = n2;
        n2 = n1;
    }
}