## 自定义参数

If `gm` does not supply you with a method you need or does not work as you'd like, you can simply use `gm().in()` or `gm().out()` to set your own arguments.

- `gm().command()` - Custom command such as `identify` or `convert`
- `gm().in()` - Custom input arguments
- `gm().out()` - Custom output arguments

The command will be formatted in the following order:

1. `command` - ie `convert`
2. `in` - the input arguments
3. `source` - stdin or an image file
4. `out` - the output arguments
5. `output` - stdout or the image file to write to

For example, suppose you want the following command:

```bash
gm "convert" "label:Offline" "PNG:-"
```

However, using `gm().label()` may not work as intended for you:

```js
gm()
.label('Offline')
.stream();
```

would yield:

```bash
gm "convert" "-label" "\"Offline\"" "PNG:-"
```

Instead, you can use `gm().out()`:

```js
gm()
.out('label:Offline')
.stream();
```

which correctly yields:

```bash
gm "convert" "label:Offline" "PNG:-"
```