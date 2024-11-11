const quote = document.getElementById('quote');

async function showResponse() {
    let url = 'https://api.api-ninjas.com/v1/dadjokes';
    let headers ={ headers: {
        'X-Api-Key': 'QNnhFwBK7FgkDI13YSSDwA==SNnD4I7uu8cnKeST'
    },}

    try{
        let res = await fetch(url,headers);
        let data = await res.json();
    console.log(data);
    quote.innerText = data[0].joke;

    }catch(err){
        console.log(err);
    }
   
}


showResponse();