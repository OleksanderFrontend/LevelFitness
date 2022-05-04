
const getResources = async (url) => {
  const res = await fetch(url);

  return await res.json();
}

export default getResources;