export const commentsObj = [
  {
    id: 1,
    level: 1,
    comment: 'hi level1',
    delete: '1',
    reply: [
      {
        id: 1.1,
        level: 1.1,
        comment: 'hi level1.1',
        action: [
          { id: 1, reply: [] },
          { id: 2, delete: '1.1' },
        ],
      },
    ],
  },
  {
    id: 2,
    level: 2,
    comment: 'hi level2',
    delete: '2',
    reply: [
      {
        id: 2.1,
        level: 2.1,
        comment: 'hi level2.1',
        delete: '2.1',
        reply: [],
      },
    ],
  },
]
