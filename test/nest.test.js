const nest = require('../src/nest')

test('nest list', () => {
  const list = [
    { id: 1, parent_id: null },
    { id: 2, parent_id: 1 },
    { id: 3, parent_id: 1 },
    { id: 4, parent_id: 2 },
    { id: 5, parent_id: 4 }
  ]

  const targetList = [
    {
      id: 1,
      parent_id: null,
      children: [
        {
          id: 2,
          parent_id: 1,
          children: [
            {
              id: 4,
              parent_id: 2,
              children: [{ id: 5, parent_id: 4, children: [] }]
            }
          ]
        },
        { id: 3, parent_id: 1, children: [] }
      ]
    }
  ]
  expect(nest(list)).toEqual(targetList)
})
