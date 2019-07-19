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

> Build to `'dist'` directory by [Rollup].

## Significant Renderer Effection

**UI :**

<table border=1>
  <!-- controll column with -->
  <colgroup></colgroup>
  <!-- header -->
  <thead>
    <tr>
      <th rowspan=2>SN1</th>
      <th rowspan=2>Repository</th>
      <th colspan=3 style="text-align:center">Commiters</th>
    </tr>
    <tr><th>Team</th><th>SN2</th><th>User</th></tr>
  </thead>
  <!-- content -->
  <tbody>
    <tr><td>1</td><td>simter-vue-grid</td><td>Team A</td><td></td></tr>
    <tr>
      <td rowspan=2>2</td>
      <td rowspan=2>simter-vue-thead</td>
      <td rowspan=2>Team B</td>
      <td>1</td>
      <td>John</td>
    </tr>
    <tr><td>2</td><td>Rocky</td></tr>
    <tr>
      <td>3</td>
      <td>simter-vue-colgroup</td>
      <td>Team C</td>
      <td>1</td>
      <td>RJ</td>
    </tr>
  </tbody>
</table>

> Auto merge cell by row data structure.

**Code :**

```html
<st-grid :columns="columns" :rows=rows></st-grid>
```

```js
columns = [
  { label: "SN1", cell: "st-cell-sn"},
  { id: "repository", label: "Repository"},
  { 
    label: "Commiters", 
    children: [
      { id: "team", label: "Team"},
      // sub rows: pid represents this row is a sub row
      { pid: "commiters", label: "SN2", cell: "st-cell-sn"},
      { pid: "commiters", id: "user", label: "User"}
    ]
  }
]

rows = [
  { repository: "simter-vue-grid", team: "Team A"},
  { 
    repository: "simter-vue-thead", 
    team: "Team B",
    commiters: [
      { user: "John"},
      { user: "Rocky"},
    ] 
  },
  { 
    repository: "simter-vue-colgroup", 
    team: "Team C", 
    commiters: [{ user: "RJ"}]
  }
]
```


[Vue]: https://vuejs.org
[Parcel]: https://parceljs.org
[Rollup]: https://rollupjs.org