const productName = "Laptop Bag";
const unitPrice = 400;
const quantity = 3;
const isMember = true;

if (unitPrice <= 0 || quantity <= 0) {
  console.log("Invalid order");
} else {
  const subtotal = unitPrice * quantity;

  let discount = 0;
  if (isMember && subtotal >= 1000) {
    discount = subtotal * 0.10;
  }

  const afterDiscount = subtotal - discount;

  let shipping = 0;
  if (afterDiscount < 500) {
    shipping = 50;
  }

  const finalTotal = afterDiscount + shipping;

  console.log(`Product: ${productName}`);
  console.log(`Unit Price: ${unitPrice} EGP`);
  console.log(`Quantity: ${quantity}`);
  console.log(`Subtotal: ${subtotal} EGP`);
  console.log(`Discount: ${discount} EGP`);
  console.log(`Shipping: ${shipping} EGP`);
  console.log(`Final Total: ${finalTotal} EGP`);
}