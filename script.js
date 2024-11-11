const quote = document.getElementById('quote');
const loading = document.getElementById('loading');

async function showResponse() {
   
loading.style.display = 'block'
    let url = 'https://api.api-ninjas.com/v1/dadjokes';
    let headers ={ headers: {
        'X-Api-Key': 'QNnhFwBK7FgkDI13YSSDwA==SNnD4I7uu8cnKeST'
    },}

    try{
        let res = await fetch(url,headers);
        let data = await res.json();
    
    quote.innerText = data[0].joke;
    loading.innerHTML = `
    <audio src='img/insane-funny-scream-199845.mp3' controls autoplay></audio>
`

    }catch(err){
        console.log(err);
    }
    ;

    loading.style.display = 'none'


}
// showResponse();