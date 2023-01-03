export const useLocalStorage = () => {
  const setItem = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  function getItem<T>(key: string): T | null {
    const data: string | null = localStorage.getItem(key)

    if (!data) {
      return null
    }

    return JSON.parse(data)
  }

  return [setItem, getItem] as const
}
