import type { Ref } from 'vue'
import { ref } from 'vue'

interface CounterAnimation {
  count: Ref<number>
  animate: (finalValue: number) => void
}

export const useCounterAnimation = (duration: number = 1000): CounterAnimation => {
  const count: Ref<number> = ref(0)

  const animate = (finalValue: number): void => {
    const start: number = Date.now()

    const updateCount = (): void => {
      const time: number = Date.now() - start
      const progress: number = time / duration

      if (progress < 1) {
        count.value = Math.floor(progress * finalValue)
        requestAnimationFrame(updateCount)
      } else {
        count.value = finalValue
      }
    }

    requestAnimationFrame(updateCount)
  }

  return { count, animate }
}
