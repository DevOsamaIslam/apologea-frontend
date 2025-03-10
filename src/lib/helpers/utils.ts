export const conditionalArrayItem = <T>(condition: boolean, item: T) =>
  condition ? [item] : []

export const conditionalObjectItem = <T>(condition: boolean, item: T) =>
  condition ? item : {}
