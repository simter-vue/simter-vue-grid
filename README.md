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
  <!-- controll column with -->
  <colgroup></colgroup>
  <!-- header -->
  <thead>
    <tr><th rowspan=2>No.</th><th rowspan=2>Name</th><th colspan=2 style="text-align:center">Items</th></tr>
    <tr><th>No.</th><th>Name</th></tr>
  </thead>
  <!-- content -->
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
  { id: "id", label: "Company Id"},
  { 
    label: "Partners", 
    children: [
      { id: "name", label: "Company Name"},
      // sub rows: pid represents this row is a sub row
      { pid: "partners", id: "id", label: "Partner Id"},
      { pid: "partners", id: "name", label: "Partner Name"}
    ]
  }
]

rows = [
  { id: "google", name: "Google"},
  { 
    id: "bing", 
    name: "Bing", 
    partners: [
      { id: "P1", name: "John"},
      { id: "P2", name: "Future"},
    ] 
  },
  { id: "baidu", name: "Baidu", partners: [{ id: "P3", name: "Music"}] }
]
```


[Vue]: https://vuejs.org
[Parcel]: https://parceljs.org
[Rollup]: https://rollupjs.org