export function fetchImage(inputValue) {
  const APIKEY = '43947691-9c404bec92b20484d2e4a6bea';
  const searchParams = new URLSearchParams({
    orientation: 'horizontal',
    image_type: 'photo',
    safesearch: true,
    per_page: 9,
  });

  return fetch(
    `https://pixabay.com/api/?key=${APIKEY}&q=${inputValue}&${searchParams}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}