export const getPoetry = () => {
    return fetch('https://v1.jinrishici.com/all.json', {
        method: 'get'
    }).then((res) => {
        return res.json();
    }).then((data) => {
        return [data.origin, data.author, data.content]
    }).catch(err => console.log(err));
}