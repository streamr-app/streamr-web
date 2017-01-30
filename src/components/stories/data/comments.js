import moment from 'moment'

export default [
  {
    channelId: 0,
    channel: {
      name: 'Tyler Petresky',
      profileImage: 'http://placehold.it/60x60'
    },
    message: 'This video was freaking dope, bruh! Next time try to add a little more artistic drawings.',
    createdAt: moment().subtract(7, 'minutes')
  }, {
    channelId: 69,
    channel: {
      name: 'Deez Nuts',
      profileImage: 'http://placehold.it/60x60'
    },
    message: 'Very stimulating intellectual content here. I really enjoyed the part where the man drank the Kool-aid.',
    createdAt: moment().subtract(2, 'minutes')
  }, {
    channelId: 145,
    channel: {
      name: 'Maxcell \'Prince\' Wilson',
      profileImage: 'http://placehold.it/60x60'
    },
    message: 'Long ass comment: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdAt: moment()
  }
]
