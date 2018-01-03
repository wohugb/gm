用你自定义的方法扩展 gm 是很容易的. 所有必要的是将你的方法添加到 <code>gm.prototype</code>. 例如, 让我们写一个棕褐色的扩展名，它会给任何图像一个很好的“[sepia](http://en.wikipedia.org/wiki/Sepia_tone#Sepia_toning tone)”.

```js
var gm = require("gm")
gm.prototype.sepia = function(){
  this.modulate(115, 0, 100).colorize(7, 21, 50)
  return this
}
```

嘿，看起来很简单吧？ 你可以这样使用它：

```js
gm("path/to/img.png")
  .sepia()
  .write("iLoveSepiaAndSoShouldYou.png", function(err){ ... })
```

So let's take a looky at what's going on here. Within the sepia method, <code>this</code> refers to the current instance of gm so you have access to all of the other gm methods and extensions. We're just utilizing two built in <code>gm</code> methods here to get the effect we want. Notice also that we return <code>this</code>, which let's us retain the ability to continue chaining methods. We could return a little more elegantly too since, by convention, every method returns <code>this</code>:

```js
var gm = require("gm")
gm.prototype.sepia = function(){
  return this.modulate(115, 0, 100).colorize(7, 21, 50)
}
```