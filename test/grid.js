import test from 'ava'
import Vue from 'vue'
import Grid from '../src/grid.vue'

function createGridInstance(data) {
  const Constructor = Vue.extend(Grid)
  const vm = new Constructor({ propsData: data }).$mount()
  return vm
}

test('simplest grid', t => {
  // define grid data
  const columns = [
    { id: "sn", label: "No." },
    { id: "name" }
  ]
  const rows = [
    { sn: 1, name: "Name 1" },
    { sn: 2, name: "Name 2" }
  ]

  // create grid instance
  const vm = createGridInstance({ columns, rows })

  // verify main container
  t.is(vm.$el.tagName, "DIV")
  const children = vm.$el.children
  t.is(children.length, 2) // headerContainer and contentContainer

  // verify headerContainer
  const headerContainer = children[0]
  t.is(headerContainer.tagName, "DIV")

  // verify contentContainer
  const contentContainer = children[1]
  t.is(contentContainer.tagName, "DIV")
})