var url = require("url");

var adr = "http://localhost:8080/index.html?product_id=123&product_sku=gh92l0x";
var qurl = url.parse(adr,true);

console.log(qurl.host);
console.log(qurl.pathname);
console.log(qurl.search);

var queryData = qurl.query;
console.log("Parameters");

console.log("Product ID: "+queryData.product_id);
console.log("Product SKU: "+queryData.product_sku);

