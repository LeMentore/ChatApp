export default ((wsUrl) => {
    let ws;
    ws = new WebSocket(wsUrl);

    ws.onopen = () => {
        console.log('ws open!');
    }

    ws.onmessage = (message) => {
        console.log(message.data);
    }

    return ws

})('ws://localhost:3001')