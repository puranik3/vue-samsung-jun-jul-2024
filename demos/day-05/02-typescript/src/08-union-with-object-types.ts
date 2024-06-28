type Product = {
    kind: "product"
    name: string,
    manufacturer: string,
}

type Service = {
    kind: "service"
    name: string,
    siteLocation: string
}

type OrderItem = Product | Service;

let item : OrderItem;

item = {
    kind: "product",
    name: 'One Plus Nord',
    manufacturer: 'One Plus'
}

item = {
    kind: "service",
    name: 'House Painting',
    siteLocation: '123, KT Street, Chennai'
}

// if( item.kind === 'service' ) {
//     console.log( 'do something to do with product - start shipping process')
// } else {

// }

export {}