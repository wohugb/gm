# 基本绘图

查看 [drawing.js](example.md) 文件里的示例.

??? note "画 - draw"
    Annotate an image with one or more graphic primitives (shapes, text, transformations, pixel operations). Used internally for all drawing methods.
    ```js
    gm("img.png").draw(args)
    ```

??? note "矩形 - drawArc"
    Inscribe an elliptical arc within a rectangle. Requires a start and end point as well as the degrees of rotation.
    ```js
    gm("img.png").drawArc(x0, y0, x1, y1, r0, r1)
    ```

??? note "贝塞尔曲线 - drawBezier"
    ```js
    gm("img.png").drawBezier([x0, y0], ... [xn, yn])
    ```

??? note "圆 - drawCircle"
    ```js
    gm("img.png").drawCircle(x0, y0, x1, y1)
    ```

??? note "椭圆形 - drawEllipse"
    ```js
    gm("img.png").drawEllipse(x0, y0, r0, ry, r0, r1)
    ```

??? note "线 - drawLine"
    ```js
    gm("img.png").drawLine(x0, y0, x1, y1)
    ```

??? note "点 - drawPoint"
    ```js
    gm("img.png").drawPoint(x, y)
    ```

??? note "多边形 - drawPolygon"
    ```js
    gm("img.png").drawPolygon([x0, y0] ... [xn, yn])
    ```

??? note "多段线 - drawPolyline"
    ```js
    gm("img.png").drawPolyline([x0, y0] ... [xn, yn])
    ```

??? note "矩形 - drawRectangle"
    wc and hc are optional and add roundness to the corners.
    ```js
    gm("img.png").drawRectangle(x0, y0, x1, y1 [, wc, hc])
    ```

???+ danger "文本 - drawText"
    Draws text on an image at x/y coordinates.
    ```js
    gm("img.png").drawText(x, y, text [, gravity])
    ```

??? note "填充颜色 - fill"
    Specifies the color to use when filling a drawn shape.
    ```js
    gm("img.png").fill(color)
    ```

??? note "字体 - font"
    ```js
    gm("img.png").font(name)
    ```

??? note "字体大小 - fontSize"
    ```js
    gm("img.png").fontSize(size)
    ```

??? note "划 - stroke"
    Specifies the color to use when stroking a drawn shape.
    ```js
    gm("img.png").stroke(color [, width])
    ```

??? note "设置边的宽度 - strokeWidth"
    Specifies the stroke width to use when stroking a drawn shape.
    ```js
    gm("img.png").strokeWidth(width)
    ```

??? note "设置属性 - setDraw"
    Sets drawing properties. property can be either "color" or "matte".
    ```js
    gm("img.png").setDraw(property, x, y, method)
    ```
