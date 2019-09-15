import Vue from 'vue'

import Header from '~/components/layout/Header'
import HeaderBottom from '~/components/layout/HeaderBottom'
import SubContents from '~/components/layout/SubContents'

Vue.mixin({
  components: {
    Header,
    HeaderBottom,
    SubContents
  }
})
