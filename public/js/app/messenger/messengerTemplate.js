messengerTemplate = () => `
<div id = "container">
    <div id = "divUsersList"></div>
    <div id = "divChat">
        <p id = "roomName"></p>
        <button id = "leaveRoomBtn" class = "hide">X</button>
        <div id = "messages"></div>
        <div class = "sendComponents">
            <input id = "messageInp" placeholder="Write message">
            <button id = "sendBttn">Send</button>
        </div>
    </div>
    <div id = "roomsContainer">
        <p class = "info">List of available chats</p>
        <div id = "divRoomsList"></div>
        <div id = "menu">
            <p class = "question">Do you want to create a chat?</p>
            <input id = "roomNameInp" placeholder = "Write room name"><button id = "createRoomBttn">Create</button>
        <div>
    </div>
    
</div>
`;