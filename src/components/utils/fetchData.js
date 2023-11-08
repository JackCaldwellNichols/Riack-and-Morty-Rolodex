

export const fetchData = async (url, setData) => {
    let data = await fetch(url).then((res) => res.json())
    setData(data)
}