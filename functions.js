export function showPosition(position) {
    if (position === 1) {
        showAll.style = "border-color:rgba(175, 47, 47, 0.1)";
        showActive.style = "border-color:none)";
        showCompleted.style = "border-color:none)";
    }
    else if (position === 2) {
        showAll.style = "border-color:none";
        showActive.style = "border-color:rgba(175, 47, 47, 0.1)";
        showCompleted.style = "border-color:none)";
    }
    else if (position === 3) {
        showAll.style = "border-color:none";
        showActive.style = "border-color:none)";
        showCompleted.style = "border-color:rgba(175, 47, 47, 0.1)";
    }
}
export function showOrHideButtons(countTodos) {
    if (countTodos > 0) {
        bottomTable.style = "display:table-row";
        markAll.style = "display:table-row";
    }
    else {
        bottomTable.style = "display:none";
        markAll.style = "display:none";
    }
    
}
export function hideRows(rowsToHide) {
    var rows = document.querySelectorAll(rowsToHide);
    rows.forEach(row => {
        row.style = "display:none";
    });
}
export function showRows(rowsToShow) {
    var rows = document.querySelectorAll(rowsToShow);
    rows.forEach(row => {
        row.style = "display:table-row";
    });
}
export function showOrHideRows(position) {
    if (position === 2) {
        hideRows(".rowChecked");
        showRows(".rowNotChecked");
    }
    if (position === 3) {
        hideRows(".rowNotChecked");
        showRows(".rowChecked")
    }
}
