Template.products.catnotselected = function() {
  return Session.equals('category', null);
};

Template.products.category = function() {
  return Session.get('category');
};

Template.products.productlist = function() {
  return Products.find({catName:Session.get('category')});
};

Template.product.currency = function(num) {
  return Number(num).toFixed(2) + " zł";
}

Template.product.events({
  'click .addcart':function(evt,tmpl){
    var qty = tmpl.find('.prodqty').value;
    console.log("jestem");
    var product = this._id;
    var sessid = Meteor.default_connection._lastSessionId;
    Meteor.call('addToCart',qty,product,sessid);
  }
});
