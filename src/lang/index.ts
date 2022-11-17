import { createI18n } from 'vue-i18n'
import ja from './ja.json'
import en from './en.json'

type MessageSchema = typeof en


const i18n = createI18n<[MessageSchema], 'en-US' | 'ja-JP'>({
  locale: 'ja-JP',
  numberFormats: {
    'en-US': {
      currency: {
        style: 'currency', currency: 'USD', notation: 'standard'
      },
      decimal: {
        style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
      },
      percent: {
        style: 'percent', useGrouping: false
      }
    },
    'ja-JP': {
      currency: {
        style: 'currency', currency: 'JPY', useGrouping: true, currencyDisplay: 'symbol'
      },
      decimal: {
        style: 'decimal', minimumSignificantDigits: 3, maximumSignificantDigits: 5
      },
      percent: {
        style: 'percent', useGrouping: false
      }
    }
  },
  datetimeFormats: {
    'en-US': {
      short: {
        year: 'numeric', month: 'short', day: 'numeric'
      },
      long: {
        year: 'numeric', month: 'short', day: 'numeric',
        weekday: 'short', hour: 'numeric', minute: 'numeric'
      }
    },
    'ja-JP': {
      short: {
        year: 'numeric', month: 'short', day: 'numeric'
      },
      long: {
        year: 'numeric', month: 'short', day: 'numeric',
        weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: true
      }
    }
  },
  messages: {
    'en-US': en,
    'ja-JP': ja
  }
})


export default i18n