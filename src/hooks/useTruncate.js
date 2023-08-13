



export const useTruncate = (words, maxLength) => {
    return words.length > maxLength ? `${words.slice(0, maxLength)} ....read more` : words
  }