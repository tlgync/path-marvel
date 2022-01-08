export const Fetch = (url: string, requestOptions: object) => (fetch(url, requestOptions)

  .then(response => {
    if (response.ok) {
      return response.json();
    }
    if (response.status === 401) {
      localStorage.removeItem('user');
      window.location.reload();
    } else {
      throw new Error();
    }
    return false;
  })
  .then(json => json)
  .catch(() => false)
);
