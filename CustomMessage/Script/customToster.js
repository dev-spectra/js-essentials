const root = window.location.origin;

export function ShowCustomAlert(type, message, element) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    //link.href = `${root}/css/alertmessage.css`;
    link.href = `https://github.com/dev-spectra/js-essentials/raw/refs/heads/main/CustomMessage/StyleSheet/toster.css`;
    document.head.appendChild(link);

    //const parent = element.closest('#parent');
    const alertContainer = element.querySelector('#alert-container');

    // Create the alert div
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', `alert-${type}`);
    alertDiv.innerHTML = `
                <span class="alert-icon">${type === 'success' ? '&#10004;' :
            type === 'error' ? '&#10006;' :
                type === 'warning' ? '&#9888;' :
                    '&#9432;'
        }</span>
                <span class="alert-message">${message} </span>
                <span class="alert-close" onclick="this.parentElement.style.display='none';"> &#10006;</span>
            `;

    // Append the alert to the container
    alertContainer.appendChild(alertDiv);

    // Trigger the alert's appearance animation
    setTimeout(() => {
        alertDiv.style.opacity = '1';
        alertDiv.style.transform = 'translateX(0)';
    }, 100);

    // Automatically close the alert after 5 seconds
    setTimeout(() => {
        alertDiv.style.opacity = '0';
        alertDiv.style.transform = 'translateX(100%)';
        setTimeout(() => {
            alertDiv.remove();
        }, 300);
    }, 5000);
}
