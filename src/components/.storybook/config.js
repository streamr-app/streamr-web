import { configure } from '@kadira/storybook'

import '../../config/moment.config.js'

import '../../styles/index.styl'

function loadStories () {
  require('../stories/buttons')
  require('../stories/channel')
  require('../stories/color-pickers')
  require('../stories/drawing-board')
  require('../stories/fields')
  require('../stories/forms')
  require('../stories/streams')
  require('../stories/stream-renderer')
  require('../stories/topics')
}

configure(loadStories, module)
