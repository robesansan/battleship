import { shallowMount } from '@vue/test-utils'
import Cell from '@/components/Cell.vue'

describe('Cell.vue', () => {
  it('clickable cell without blocked', () => {
    let wrapper = shallowMount(Cell, {
      propsData: {
        cellData: {
          id: 12,
          x: 1,
          y: 2,
          ship: null,
          hit: false,
          tried: false,
        },
        blocked: false
      }
    })
    const cell = wrapper.find('.cell')
    expect(cell.classes()).toContain('clickable-cell')
  })

  it('clickable cell with blocked', () => {
    let wrapper = shallowMount(Cell, {
      propsData: {
        cellData: {
          id: 12,
          x: 1,
          y: 2,
          ship: null,
          hit: false,
          tried: false,
        },
        blocked: true
      }
    })
    const cell = wrapper.find('.cell')
    expect(cell.classes()).toContain('blocked-cell')
  })

  it('tried cell without blocked', () => {
    let wrapper = shallowMount(Cell, {
      propsData: {
        cellData: {
          id: 12,
          x: 1,
          y: 2,
          ship: null,
          hit: false,
          tried: true,
        },
        blocked: false
      }
    })
    const cell = wrapper.find('.cell')
    expect(cell.classes()).toContain('tried-cell')
  })

  it('tried cell with blocked', () => {
    let wrapper = shallowMount(Cell, {
      propsData: {
        cellData: {
          id: 12,
          x: 1,
          y: 2,
          ship: null,
          hit: false,
          tried: true,
        },
        blocked: true
      }
    })
    const cell = wrapper.find('.cell')
    expect(cell.classes()).toContain('tried-cell')
  })
})
