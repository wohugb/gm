# 基本绘图

Take a look at drawing.js for examples.

!!! note "draw"
    Annotate an image with one or more graphic primitives (shapes, text, transformations, pixel operations). Used internally for all drawing methods.
    ```js
    gm("img.png").draw(args)
    ```

!!! note "drawArc"
    Inscribe an elliptical arc within a rectangle. Requires a start and end point as well as the degrees of rotation.
    ```js
    gm("img.png").drawArc(x0, y0, x1, y1, r0, r1)
    ```

!!! note "drawBezier"
    Draw a Bezier curve.
    ```js
    gm("img.png").drawBezier([x0, y0], ... [xn, yn])
    ```

!!! note "drawCircle"
    Draws a Circle.
    ```js
    gm("img.png").drawCircle(x0, y0, x1, y1)
    ```

!!! note "drawEllipse"
    Draws an Ellipse.
    ```js
    gm("img.png").drawEllipse(x0, y0, r0, ry, r0, r1)
    ```

!!! note "drawLine"
    Draws a Line.
    ```js
    gm("img.png").drawLine(x0, y0, x1, y1)
    ```

!!! note "drawPoint"
    Draws a Point.
    ```js
    gm("img.png").drawPoint(x, y)
    ```

!!! note "drawPolygon"
    Draws a Polygon.
    ```js
    gm("img.png").drawPolygon([x0, y0] ... [xn, yn])
    ```

!!! note "drawPolyline"
    Draws a Polyline.
    ```js
    gm("img.png").drawPolyline([x0, y0] ... [xn, yn])
    ```

!!! note "drawRectangle"
    Draws a Rectangle. wc and hc are optional and add roundness to the corners.
    ```js
    gm("img.png").drawRectangle(x0, y0, x1, y1 [, wc, hc])
    ```

!!! note "drawText"
    Draws text on an image at x/y coordinates.
    ```js
    gm("img.png").drawText(x, y, text [, gravity])
    ```

!!! note "fill"
    Specifies the color to use when filling a drawn shape.
    ```js
    gm("img.png").fill(color)
    ```

!!! note "font"
    Specifies the font to use when you drawText.
    ```js
    gm("img.png").font(name)
    ```

!!! note "fontSize"
    Specifies the font size to use when you drawText.
    ```js
    gm("img.png").fontSize(size)
    ```

!!! note "stroke"
    Specifies the color to use when stroking a drawn shape.
    ```js
    gm("img.png").stroke(color [, width])
    ```

!!! note "strokeWidth"
    Specifies the stroke width to use when stroking a drawn shape.
    ```js
    gm("img.png").strokeWidth(width)
    ```

!!! note "setDraw"
    Sets drawing properties. property can be either "color" or "matte".
    ```js
    gm("img.png").setDraw(property, x, y, method)
    ```
