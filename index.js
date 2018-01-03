//****** Factory function pattern...

// function creation (s1)
const factoryFunction = (p1, p2, m1) => {
    //(s2)
    const emptyObj= {}

    // (s3)
    emptyObj.property1 = p1;
    emptyObj.property2 = p2;
    emptyObj.method = m1

    // (s4)
    return emptyObj;
}

console.log(factoryFunction());