async function request() {

    const url = "http://localhost:3001";
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
    } catch (error) {        
        console.error("Timeout Error");
    }
}