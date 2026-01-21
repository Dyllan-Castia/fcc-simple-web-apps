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
const compCheckboxes = compGroup.querySelectorAll('input[type="checkbox"][name="complaint"]');
const otherComplaint = document.getElementById("other-complaint");
const solRadios = solGroup.querySelectorAll('input[type="radio"][name="solutions"]');
const otherSolution = document.getElementById("other-solution");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const orderNoRegex = /^2024\d{6}$/;
const productCodeRegex = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/;

function validateForm() {

const fullNameValid = fName.value.trim() !== "";
const emailValid = emailRegex.test(email.value.trim());
const orderNoValid = orderNoRegex.test(orderNo.value.trim());
const productCodeValid = productCodeRegex.test(prodCode.value.trim());
const qtyStr = quantity.value.trim();
const qtyNum = Number(qtyStr);
const quantityValid =
  qtyStr !== "" && Number.isInteger(qtyNum) && qtyNum > 0;
  const complaintsGroupValid = Array.from(compCheckboxes).some(cb => cb.checked);
const complaintDescriptionValid = otherComplaint.checked
  ? compDes.value.trim().length >= 20
  : true;
  const solutionsGroupValid = Array.from(solRadios).some(r => r.checked);
  const solutionDescriptionValid = otherSolution.checked
  ? solDes.value.trim().length >= 20
  : true;

  return {
    "full-name": fullNameValid,
    email: emailValid,
    "order-no": orderNoValid,
    "product-code": productCodeValid,
    quantity: quantityValid,
    "complaints-group": complaintsGroupValid,
    "complaint-description": complaintDescriptionValid,
    "solutions-group": solutionsGroupValid,
    "solution-description": solutionDescriptionValid
  };
}

function isValid(resultObj) {
  return Object.values(resultObj).every(val => val === true);
}

fName.addEventListener("change", () => {
  const result = validateForm();
  fName.style.borderColor = result["full-name"] ? "green" : "red";
});

email.addEventListener("change", () => {
  const result = validateForm();
  email.style.borderColor = result.email ? "green" : "red";
});

orderNo.addEventListener("change", () => {
  const result = validateForm();
  orderNo.style.border = result["order-no"] ? "green" : "red";
})

prodCode.addEventListener("change", () => {
  const result = validateForm();
  prodCode.style.borderColor = result["product-code"] ? "green" : "red";
});

quantity.addEventListener("change", () => {
  const result = validateForm();
  quantity.style.borderColor = result.quantity ? "green" : "red";
});

compCheckboxes.forEach(cb => {
  cb.addEventListener("change", () => {
    const result = validateForm();

    // Fieldset border: at least one checkbox checked
    compGroup.style.borderColor = result["complaints-group"] ? "green" : "red";

    if (otherComplaint.checked) {
      compDes.style.borderColor = result["complaint-description"] ? "green" : "red";
    } else {
      compDes.style.borderColor = "rgb(118, 118, 118)";
    }
  });
});


compDes.addEventListener("change", () => {
  if (!otherComplaint.checked) return;

  const result = validateForm();
  compDes.style.borderColor = result["complaint-description"] ? "green" : "red";
});

solRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    const result = validateForm();

    solGroup.style.borderColor = result["solutions-group"] ? "green" : "red";

    if (otherSolution.checked) {
      solDes.style.borderColor = result["solution-description"] ? "green" : "red";
    } else {
      solDes.style.borderColor = "rgb(118, 118, 118)";
    }
  });
});


solDes.addEventListener("change", () => {
  if (!otherSolution.checked) return;

  const result = validateForm();
  solDes.style.borderColor = result["solution-description"] ? "green" : "red";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const results = validateForm();

  const ok = isValid(results);

  if (!ok) {
    fName.style.borderColor = results["full-name"] ? "green" : "red";
    email.style.borderColor = results.email ? "green" : "red";
    orderNo.style.borderColor = results["order-no"] ? "green" : "red";
    prodCode.style.borderColor = results["product-code"] ? "green" : "red";
    quantity.style.borderColor = results.quantity ? "green" : "red";

    compGroup.style.borderColor = results["complaints-group"] ? "green" : "red";

    compDes.style.borderColor = results["complaint-description"] ? "green" : "red";

    solGroup.style.borderColor = results["solutions-group"] ? "green" : "red";

    solDes.style.borderColor = results["solution-description"] ? "green" : "red";

document.getElementById("message-box").textContent = "Submitted successfully.";
    return;
  }
});
