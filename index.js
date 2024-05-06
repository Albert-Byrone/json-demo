console.log("SOmethin")
fetch('https://api.jsonbin.io/v3/qs/66387534ad19ca34f8652602').then(response => response.json()).then(data => console.log(data.record.users))