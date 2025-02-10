export const convertToVietnamese = (word) => {
  const dictionary = {
      "nguc": "ngực",
      "lung": "lưng",
      "vai": "vai",
      "tay": "tay",
      "chan": "chân",
      "bung": "bụng"
  };

  return dictionary[word.toLowerCase()] || word;
}