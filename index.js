//****** Factory function pattern...

// function creation pattern (s1)
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

// console.log(factoryFunction());

// constructor creation pattern
//s1
const ConstructurePattern = function (p1, p2, m1) {
    this.property1 = p1
    this.property2 = p2
    this.m1 = m1
}

// s2
const construObj = new ConstructurePattern('property1', 'property2', function () {
    console.log('method 1')
})

// console.dir(construObj)


// prototype creation pattern

const ProtoFunction = function() {

}

ProtoFunction.prototype.property1 = 'property1';
ProtoFunction.prototype.property2 = 'property2';
ProtoFunction.prototype.method = function(){console.log('method 1')}

protoObj1 = new ProtoFunction()

// console.dir(ProtoFunction)

// Dynamic prototype pattern
// (s1)
const DynamicProto = function (p1, p2) {

    // (s2)
    this.p1= 'property1'
    this.p2= 'property2'

    // (s3)
    if(typeof this.m1 !== 'function'){
        DynamicProto.prototype.m1= function () {
            console.log('method 1')
        }
    }
}

const dynaObj = new DynamicProto('property1', 'property2')

console.dir(dynaObj.m1())
