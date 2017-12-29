var gm = require('gm');

gm()
  .in('-page', '+0+0')
  .in('bg.jpg')
  .in('-page', '+10+20') // location of smallIcon.jpg is x,y -> 10, 20
  .in('smallIcon.jpg')
  .mosaic()
  .write('tesOutput.jpg', function (err) {
    if (err) console.log(err);
  });