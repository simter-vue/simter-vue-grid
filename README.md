# simter-vue-grid

A [Vue] grid component with fixed header, group header, cross line merge cell features.

## Develop

```shell
$ yarn install
$ yarn start
```

> `'yarn start'` use [Parcel] to run `'demo/index.html'`.

## Build

```shell
$ yarn build
```

> Build to `'dest'` directory by [Rollup].

## Significant Renderer Effection

**UI :**

<table border=1>
  <!-- 列宽控制 -->
  <colgroup></colgroup>
  <!-- 列头 -->
  <thead>
    <tr><th rowspan=2>No.</th><th rowspan=2>Name</th><th colspan=2 style="text-align:center">Items</th></tr>
    <tr><th>No.</th><th>Name</th></tr>
  </thead>
  <!-- 内容 -->
  <tbody>
    <tr><td>1</td><td>Main 1</td><td></td><td></td></tr>
    <tr><td rowspan=2>2</td><td rowspan=2>Main 2</td><td>1</td><td>Sub 2-1</td></tr>
    <tr><td>2</td><td>Sub 2-2</td></tr>
    <tr><td>3</td><td>Main 3</td><td>1</td><td>Sub 3-1</td></tr>
  </tbody>
</table>

> Auto merge cell by row data structure.

**Code :**

```html
<st-grid :columns="columns" :rows=rows></st-grid>
```

```js
columns = [
  { id: "sn", label: "No."},
  { id: "name", label: "Name"},
  { 
    id: "items", 
    children: [
      { id: "sn", label: "No."},
      { id: "name", label: "Name"},
    ]
  }
]

rows = [
  { sn: 1, name: "Main 1"},
  { 
    sn: 2, 
    name: "Main 2", 
    items: [
      { sn: 1, name: "Sub 1-1"},
      { sn: 2, name: "Sub 1-2"},
    ] 
  },
  { sn: 3, name: "Main 3", items: [{ sn: 1, name: "Sub 3-1"}] }
]
```


[Vue]: https://vuejs.org
[Parcel]: https://parceljs.org
[Rollup]: https://rollupjs.org