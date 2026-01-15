const form = document.getElementById("form");

const fName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const prodCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const compGroup = document.getElementById("complaints-group");
const compDes = document.getElementById("complaint-description");
const solGroup = document.getElementById("solutions-group");
const solDes = document.getElementById("solution-description");

function validateForm() {
  return {
    "full-name": false,
    email: false,
    "order-no": false,
    "product-code": false,
    quantity: false,
    "complaints-group": false,
    "complaint-description": false,
    "solutions-group": false,
    "solution-description": false
  };
}

function isValid() {
  
}
