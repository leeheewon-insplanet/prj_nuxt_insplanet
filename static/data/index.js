import detail01 from './detail_01.json'

class Works {
  /**
   *
   * @param { Map<string, object> } data
   */
  constructor(data) {
    this._data = data
  }

  get values() {
    return [...this._data.values()]
  }

  get keys() {
    return [...this._data.keys()]
  }
}

export const works = new Works(
  new Map([
    // 최신글일수록 상단으로
    detail01,
  ])
)
