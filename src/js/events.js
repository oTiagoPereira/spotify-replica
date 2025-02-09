const content = document.querySelector('.box_content_aside');
const thumb = document.querySelector('.custom_thumb');
const scrollbar = document.querySelector('.custom_scrollbar');

function updateThumbPosition() {
    const scrollHeight = content.scrollHeight;
    const containerHeight = content.clientHeight;
    const scrollTop = content.scrollTop;
    
    const thumbHeight = Math.max((containerHeight / scrollHeight) * containerHeight, 30);
    thumb.style.height = `${thumbHeight}px`;

    const maxScrollTop = scrollHeight - containerHeight;
    const maxThumbTop = containerHeight - thumbHeight;
    const thumbTop = (scrollTop / maxScrollTop) * maxThumbTop;

    thumb.style.top = `${thumbTop}px`;
}

content.addEventListener('scroll', updateThumbPosition);

thumb.addEventListener('mousedown', (e) => {
    const startY = e.clientY;
    const startTop = parseFloat(thumb.style.top) || 0;

    function onMouseMove(event) {
        const deltaY = event.clientY - startY;
        const maxThumbTop = content.clientHeight - thumb.clientHeight;
        let newTop = startTop + deltaY;
        newTop = Math.max(0, Math.min(newTop, maxThumbTop));

        thumb.style.top = `${newTop}px`;

        const scrollHeight = content.scrollHeight - content.clientHeight;
        content.scrollTop = (newTop / maxThumbTop) * scrollHeight;
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

updateThumbPosition();
