self.onmessage = function (e) {
    //This is the worker thread entry point
    const data = e.data.data;
    console.log('Worker received message:', data);
    let responseData = {
        subject: 'Worker response',
        data: data + 100
    };
    self.postMessage(responseData);
};
