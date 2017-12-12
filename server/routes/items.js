module.exports = function(app){
var items = [{
    name: "Ice Cream"
  },{
    name: "Waffles"
  },{
    name: "Candy",
    purchased: true
  },{
    name: "Snarks"
  }];

  app.route('/api/items')
  .get((req, res) => res.send(items))
  .post((req, res) => {
    var item = req.body;
    items.push(item); 
  })
}
