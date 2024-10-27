function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding) * 2;
    const borderWidth = parseFloat(border) * 2;
    const totalWidth = contentWidth + paddingWidth + borderWidth;
    return totalWidth;
}

// task-3-results
const task3Results = document.getElementById("task-3-results");
task3Results.innerHTML += `<p>getElementWidth("50px", "8px", "4px") = ${getElementWidth("50px", "8px", "4px")}</p>`;
task3Results.innerHTML += `<p>getElementWidth("60px", "12px", "8.5px") = ${getElementWidth("60px", "12px", "8.5px")}</p>`;
task3Results.innerHTML += `<p>getElementWidth("200px", "0px", "0px") = ${getElementWidth("200px", "0px", "0px")}</p>`;