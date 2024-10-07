// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 40 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
function findMinQuantity (inventory) {
  let minQuantity = inventory[0].quantity;
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].quantity < minQuantity) {
      minQuantity = inventory[i].quantity;
      minProduct = inventory[i].name
    }
  }
  return minQuantity
}

// console.log(findMinQuantity(inventory));
// console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${findMinQuantity(inventory)} ซึ่งมี ${findMinQuantity(inventory)} ชิ้น`)

function findMinProduct (inventory) {
  let minProduct = {name: inventory[0].name, quantity: inventory[0].quantity}
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].quantity < minProduct.quantity) {
      minProduct.quantity = inventory[i].quantity
      minProduct.name = inventory[i].name
    }
  }
  return minProduct.name
}

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${findMinProduct(inventory)} ซึ่งมี ${findMinQuantity(inventory)} ชิ้น`)