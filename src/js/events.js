function scrollAsideEvent() {
  const content = document.querySelector(".box_content_aside");
  const thumb = document.querySelector(".custom_thumb");

  function updateThumbPosition() {
    const scrollHeight = content.scrollHeight;
    const containerHeight = content.clientHeight;
    const scrollTop = content.scrollTop;

    const thumbHeight = Math.max(
      (containerHeight / scrollHeight) * containerHeight,
      30
    );
    thumb.style.height = `${thumbHeight}px`;

    const maxScrollTop = scrollHeight - containerHeight;
    const maxThumbTop = containerHeight - thumbHeight;
    const thumbTop = (scrollTop / maxScrollTop) * maxThumbTop;

    thumb.style.top = `${thumbTop}px`;
  }

  content.addEventListener("scroll", updateThumbPosition);

  thumb.addEventListener("mousedown", (e) => {
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
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  updateThumbPosition();
}

scrollAsideEvent();

function resizeEvent() {
    const box = document.querySelector("aside");
    const resizer = document.querySelector(".resizer");
  
    resizer.addEventListener("mousedown", (e) => {
      e.preventDefault();
  
      const startX = e.clientX;
      const startWidth = box.offsetWidth;
  
      function onMouseMove(event) {
        let newWidth = startWidth + (event.clientX - startX);

        if (newWidth < 280) newWidth = 280;
        if (newWidth > 600) newWidth = 600;
  
        box.style.width = `${newWidth}px`;
      }
  
      function onMouseUp() {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      }
  
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });
  }  

resizeEvent();


function scrollMainEvent() {
  const content = document.querySelector(".container_content_main");
  const thumb = document.querySelector(".custom_thumb_main");

  function updateThumbPosition() {
    const scrollHeight = content.scrollHeight;
    const containerHeight = content.clientHeight;
    const scrollTop = content.scrollTop;

    const thumbHeight = Math.max(
      (containerHeight / scrollHeight) * containerHeight,
      30
    );
    thumb.style.height = `${thumbHeight}px`;

    const maxScrollTop = scrollHeight - containerHeight;
    const maxThumbTop = containerHeight - thumbHeight;
    const thumbTop = (scrollTop / maxScrollTop) * maxThumbTop;

    thumb.style.top = `${thumbTop}px`;

    if (scrollTop <= 5) {
      thumb.style.borderRadius = "0 0.5rem 0 0";
    } 
    else if (scrollTop >= maxScrollTop - 5) {
      thumb.style.borderRadius = "0 0 0.5rem 0";
    } 
    else {
      thumb.style.borderRadius = "0";
    }
  }

  content.addEventListener("scroll", updateThumbPosition);

  thumb.addEventListener("mousedown", (e) => {
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
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  updateThumbPosition();
}


scrollMainEvent();