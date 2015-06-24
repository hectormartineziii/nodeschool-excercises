var _ = require("lodash");
    
var worker = function(collection) {
    // do work; return stuff
    var orders = _.groupBy(collection, 'article');
    var arr =[];
    var result = _.forEach(orders, function(item){
    	return _.reduce(item,function(person){
    		return person.total_orders
    	},{})
    });
    return result
};

// export the worker function as a nodejs module
module.exports = worker;