async function fetchCountries({ page } = {}) {
  try {
    let p = page == null || page == undefined || page < 0 ? 0 : page;
    let queryParams = new URLSearchParams({ page: p });
    let url = new URL("http://localhost:4123/api/countries");
    url.search = queryParams.toString();
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (e) {
    console.log("Error with request", e);
  }
}

export { fetchCountries };
