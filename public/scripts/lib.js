export function renderBlock(elementId, html) {
    const element = document.getElementById(elementId);
    element.innerHTML = html;
}
export function renderToast(message, action) {
    let messageText = '';
    if (message != null) {
        messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${(action === null || action === void 0 ? void 0 : action.name) || 'Закрыть'}</button>
      </div>
    `;
    }
    renderBlock('toast-block', messageText);
    const button = document.getElementById('toast-main-action');
    if (button != null) {
        button.onclick = function () {
            if (action != null && action.handler != null) {
                action.handler();
            }
            renderToast(null, null);
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsV0FBVyxDQUFDLFNBQWlCLEVBQUUsSUFBWTtJQUN6RCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQzNCLENBQUM7QUFZRCxNQUFNLFVBQVUsV0FBVyxDQUFDLE9BQW9CLEVBQUUsTUFBa0I7SUFDbEUsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFBO0lBRXBCLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtRQUNuQixXQUFXLEdBQUc7K0NBQzZCLE9BQU8sQ0FBQyxJQUFJO2FBQzlDLE9BQU8sQ0FBQyxJQUFJO3lDQUNnQixDQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxJQUFJLEtBQUksU0FBUzs7S0FFN0QsQ0FBQTtLQUNGO0lBRUQsV0FBVyxDQUNULGFBQWEsRUFDYixXQUFXLENBQ1osQ0FBQTtJQUVELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUM1RCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7UUFDbEIsTUFBTSxDQUFDLE9BQU8sR0FBRztZQUNmLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDNUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFBO2FBQ2pCO1lBQ0QsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN6QixDQUFDLENBQUE7S0FDRjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcmVuZGVyQmxvY2soZWxlbWVudElkOiBzdHJpbmcsIGh0bWw6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xufVxuXG50eXBlIE1lc3NhZ2VUeXBlID0ge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbn1cblxudHlwZSBBY3Rpb25UeXBlID0ge1xuICAgbmFtZTogc3RyaW5nO1xuICAgaGFuZGxlcjogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRvYXN0KG1lc3NhZ2U6IE1lc3NhZ2VUeXBlLCBhY3Rpb246IEFjdGlvblR5cGUpIHtcbiAgbGV0IG1lc3NhZ2VUZXh0ID0gJydcblxuICBpZiAobWVzc2FnZSAhPSBudWxsKSB7XG4gICAgbWVzc2FnZVRleHQgPSBgXG4gICAgICA8ZGl2IGlkPVwiaW5mby1ibG9ja1wiIGNsYXNzPVwiaW5mby1ibG9jayAke21lc3NhZ2UudHlwZX1cIj5cbiAgICAgICAgPHA+JHttZXNzYWdlLnRleHR9PC9wPlxuICAgICAgICA8YnV0dG9uIGlkPVwidG9hc3QtbWFpbi1hY3Rpb25cIj4ke2FjdGlvbj8ubmFtZSB8fCAn0JfQsNC60YDRi9GC0YwnfTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYFxuICB9XG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3RvYXN0LWJsb2NrJyxcbiAgICBtZXNzYWdlVGV4dFxuICApXG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvYXN0LW1haW4tYWN0aW9uJyk7XG4gIGlmIChidXR0b24gIT0gbnVsbCkge1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGFjdGlvbiAhPSBudWxsICYmIGFjdGlvbi5oYW5kbGVyICE9IG51bGwpIHtcbiAgICAgICAgYWN0aW9uLmhhbmRsZXIoKVxuICAgICAgfVxuICAgICAgcmVuZGVyVG9hc3QobnVsbCwgbnVsbClcbiAgICB9XG4gIH1cbn1cbiJdfQ==