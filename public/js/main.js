window.onload = function () {
    document.body.innerHTML = authorizationTemplate();
    const socket = io(window.location.origin);
    new Authorization(socket);
}