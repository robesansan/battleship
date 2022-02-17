import { shallowMount } from '@vue/test-utils'
import Grid from '@/components/Grid.vue'

describe('Grid.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Grid, {
      propsData: {
        size: 8,
        player: 1,
        playing: 1
      }
    })
  })

  it('not blocked when player is playing', () => {
    expect(wrapper.vm.blocked).toBeFalsy()
  })

  it('blocked when player is not playing', async () => {
    await wrapper.setProps({ playing: 2 })
    expect(wrapper.vm.blocked).toBeTruthy()
  })

  it('ship cells in grid correctly filled', () => {
    let allShipSizes = wrapper.vm.ships.reduce((total, ship) => total + ship.size, 0)

    // let gridShipCells = 0
    // wrapper.vm.rows.map(row => row.map(cell => { if (cell.ship != null) gridShipCells++ }))
    let gridShipCells = wrapper.vm.rows.reduce((total, row) => total + row.reduce((t, cell) => cell.ship != null ? t + 1 : t, 0), 0)

    expect(gridShipCells).toBe(allShipSizes)
  })
})
