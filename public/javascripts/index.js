var socket = io();

var app = new Vue({
    el: '#app',

    data: {
        //Mensajes del chat
        messages: ['Mensaje 1', 'Mensaje 2'],

        //Mensaje actual del input
        message: '',
    },
    methods: {
        sendMessage() {
            console.log("sending message...");

            socket.emit('message.new',this.message);
            this.message = '';
        }
    },
    created: function () {
        let _this = this;
        socket.on('message.received',function (message) {
            _this.messages.push(message);
        });
    }
});