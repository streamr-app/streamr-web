import loadMoment from 'bundle-loader!moment'

// Configure the relative time suffixes
// for moment#fromNow().

loadMoment((moment) => {
  moment.updateLocale('en', {
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'now',
      m: '1m',
      mm: '%dm',
      h: '1h',
      hh: '%dh',
      d: '1d',
      dd: '%dd',
      M: '1m',
      MM: '%dm',
      y: '1y',
      yy: '%dy'
    }
  })
})
