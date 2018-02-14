export default ((wsUrl) => {
    let ws;
    ws = new WebSocket(wsUrl);

    ws.onopen = () => {
        console.log('ws open!');
    }

    ws.onmessage = (message) => {
        console.log(message.data);
    }

    let countConnect = 0;

    const emit = (message) => {
        if(countConnect > 5) return
        if(ws.readyState === ws.CONNECTING){
            setTimeout(() => {
                emit(message);
                countConnect++;
            }, 500)
            return
        }
        ws.send(message);
        countConnect = 0;
    }

    return { emit }

})('ws://127.0.0.1:3001')