
// Product Model
class Product {
  constructor(name, type, costPrice, sellingPrice, quantity, supplier, dateReceived, quality, color = null, size = null) {
    this.name = name;
    this.type = type;
    this.costPrice = costPrice;
    this.sellingPrice = sellingPrice;
    this.quantity = quantity;
    this.supplier = supplier;
    this.dateReceived = dateReceived;
    this.quality = quality;
    this.color = color;
    this.size = size;
  }
}

//Sale Model
class Sale {
  constructor(customerName, product, quantity, paymentType, salesAgent, transportRequired = false) {
    this.customerName = customerName;
    this.product = product;
    this.quantity = quantity;
    this.paymentType = paymentType;
    this.salesAgent = salesAgent;
    this.transportRequired = transportRequired;
    this.date = new Date();
    this.totalPrice = this.calculateTotal();
  }

  calculateTotal() {
    let total = this.product.sellingPrice * this.quantity;
    if (this.transportRequired) {
      total *= 1.05; // 5% transport fee
    }
    return total;
  }
}

//Inventory Manager
class Inventory {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  updateProduct(productName, updates) {
    const product = this.products.find(p => p.name === productName);
    if (!product) {
      console.log("Product not found.");
      return false;
    }

    Object.assign(product, updates);
    console.log(`Updated product: ${product.name}`);
    return true;
  }

  getStockReport() {
    return this.products.map(p => ({
      name: p.name,
      type: p.type,
      quantity: p.quantity,
      costPrice: p.costPrice,
      sellingPrice: p.sellingPrice,
      supplier: p.supplier,
      dateReceived: p.dateReceived,
      quality: p.quality
    }));
  }
}

//Sales Manager
class SalesManager {
  constructor() {
    this.sales = [];
  }

  recordSale(sale) {
    if (sale.product.quantity < sale.quantity) {
      throw new Error("Not enough stock for this sale.");
    }

    sale.product.quantity -= sale.quantity;
    this.sales.push(sale);
    console.log(`Sale recorded for ${sale.customerName}`);
  }

  getSalesReport() {
    return this.sales.map(s => ({
      customer: s.customerName,
      product: s.product.name,
      quantity: s.quantity,
      total: s.totalPrice.toFixed(2),
      paymentType: s.paymentType,
      salesAgent: s.salesAgent,
      date: s.date.toLocaleString()
    }));
  }
}

//Sample Usage

// Create Inventory and Sales Managers
const inventory = new Inventory();
const salesManager = new SalesManager();

// Add a product to stock
const product1 = new Product(
  "Office Desk", "Furniture", 300, 450, 5,
  "Upcountry Supplier A", "2025-07-28", "High", "Walnut Brown", "120x60cm"
);
inventory.addProduct(product1);

// Record a sale
try {
  const sale1 = new Sale(
    "EcoBuild Ltd", product1, 2, "Bank Transfer", "Jack", true
  );
  salesManager.recordSale(sale1);
} catch (error) {
  console.error("Sale failed:", error.message);
}

// View Reports
console.log("==== STOCK REPORT ====");
console.table(inventory.getStockReport());

console.log("==== SALES REPORT ====");
console.table(salesManager.getSalesReport());
