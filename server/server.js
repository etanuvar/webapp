Meteor.startup(function(){
  if(Products.find().count() === 0){
    //add sample products
    Products.insert({thumb:'baterie1.jpg', name:'Baterie1', desc:'Przykładowy opis baterie1', price:2.50, catName: 'Baterie'});
    Products.insert({thumb:'baterie2.jpg', name:'Baterie2', desc:'Przykładowy opis baterie2', price:3.00, catName: 'Baterie'});
    Products.insert({thumb:'baterie3.jpg', name:'Baterie3', desc:'Przykładowy opis baterie3', price:4.00, catName: 'Baterie'});
    Products.insert({thumb:'baterie4.jpg', name:'Baterie4', desc:'Przykładowy opis baterie4', price:1.50, catName: 'Baterie'});

    Products.insert({thumb:'zasilacz1.jpg', name:'Zasilacz1', desc:'Przykładowy opis zasilacz1', price:11.50, catName: 'Zasilacze'});
    Products.insert({thumb:'zasilacz2.jpg', name:'Zasilacz2', desc:'Przykładowy opis zasilacz2', price:12.50, catName: 'Zasilacze'});
    Products.insert({thumb:'zasilacz3.jpg', name:'Zasilacz3', desc:'Przykładowy opis zasilacz3', price:13.50, catName: 'Zasilacze'});

    Products.insert({thumb:'przewod1.jpg', name:'Przewod1', desc:'Przykładowy opis przewod1', price:0.50, catName: 'Przewody'});
    Products.insert({thumb:'przewod2.jpg', name:'Przewod2', desc:'Przykładowy opis przewod2', price:0.70, catName: 'Przewody'});
    Products.insert({thumb:'przewod3.jpg', name:'Przewod3', desc:'Przykładowy opis Przewod3', price:0.90, catName: 'Przewody'});
  }
  if(Categories.find().count() === 0){
    //add sample categories
    var hwid = Categories.insert({name: 'ELEKTRONIKA'});
    var juid = Categories.insert({name: 'CZĘŚCI'});
    SubCategories.insert({name: 'Zasilacze', cat:hwid});
    SubCategories.insert({name: 'Baterie', cat:juid});
    SubCategories.insert({name: 'Przewody', cat:juid});
    SubCategories.insert({name: 'Inne', cat:juid});
  }
});
Meteor.methods({
  removeAll:function(){
    Products.remove({});
    Categories.remove({});
    SubCategories.remove({});
    CartItems.remove({});
  },
  addToCart:function(qty,product,session){
    if(qty > 0){
      CartItems.insert({qty:qty,product:product,sessid:session});
    }
    else {
      console.log('Quantity is zero');
    }
  },
  removeCartItem:function(id){
    CartItems.remove({_id: id});
  }
});
