exports.myDateTime = function () {
  return Date();
};

exports.myTime = function () {
  return Date('H I S');
};


exports.helloWorld = function() {
return timeout();
};

function timeout(){

	setTimeout('Going...', 2000);
}