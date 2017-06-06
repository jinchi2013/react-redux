import uuid from 'uuid'

export default function TodoFactory(content) {
  return {
    id: uuid(),
    content: content,
    isFinished: false,
    priority: 1,
    tagging: []
  }
}
