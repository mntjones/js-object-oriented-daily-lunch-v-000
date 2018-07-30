// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;
let customerId = 0;
let mealId = 0;
let deliveryId = 0;

class Neighborhood {
  constructor (name) {
    this.name = name;
    this.id = ++neighborhoodId;
    
    store.neighborhoods.push(this);
  }
  
  deliveries(){
    return store.deliveries.filter(delivery => {
      return delivery.neighborhoodId == this.id;
    });
  }
  
  customers(){
  
  }
  
  meals(){ 
  
  }
}

class Customer {
  constructor(name, neighborhoodId) {
    this.name = name;
    this.id = ++customerId;
    
    if (neighborhoodId) {
      this.neighborhoodId = neighborhoodId;
    }
    store.customers.push(this);
  }
  
  deliveries() {
    return store.deliveries.filter(delivery => {
      return delivery.customerId == this.id;
    });
  }
  
  meals(){
    
  }
  
  totalSpent(){
    
  }
}

class Meal {
  constructor(title, price) {
    this.title = title;
    this.price = price;
    this.id = ++mealId;
    
    store.meals.push(this);
  }
  
  deliveries() {
    return store.deliveries.filter(delivery => {
      return delivery.mealId == this.id;
    });
  }
  
  customers() {
    
  }
  
  static byPrice() {
    
  }
}

class Delivery {
  constructor(meal, neighborhood, customer) {
    this.id = ++deliveryId;
    store.deliveries.push(this);
    if (meal) {
      this.mealId = meal
    }
    if (neighborhood) {
      this.neighborhoodId = neighborhood
    }
    if (customer) {
      this.customerId = customer
    }
  }
  
  meal() {
    
  }
  
  customer() {
    
  }
  
  neighborhood() {
    
  }
}