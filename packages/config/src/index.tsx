import { animations } from './animations'
import { configWithoutAnimations } from './config'
export * from './media'
export * from './createGenericFont'

export const config = {
  ...configWithoutAnimations,
  animations,
}
