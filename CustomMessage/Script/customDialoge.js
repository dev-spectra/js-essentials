const root = window.location.origin;
const git_repo = 'https://spectrasolutions.in/assets/repos';
const css_path = '/js-essentials/CustomMessage/StyleSheet/messageDialoge.css'
export function ShowAlertConfirmation(mTitle, mMessage, mTrueButton, mFalseButton, parent) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    //link.href = link.href = `${root}/css/alertmessage.css`;
    link.href = `${git_repo}${css_path}`;
    document.head.appendChild(link);
    return new Promise((resolve) => {


        //const parent = element.closest('#parent');
        const alertContainer = document.createElement('div');
        alertContainer.innerHTML = `
                    <div class="modal fade" id="confirmation-modal" tabindex="-1" aria-labelledby="confirmation-modal-label" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content custom-modal-content">
                                <div class="modal-body">
                                    <h5 class="modal-title alert-modal" id="confirmation-modal-label">${mTitle}</h5>
                                    <p>${mMessage}</p>
                                </div>
                                <div class="modal-footer custom-modal-footer">
                                    <button type="button" id="alert-true" class="btn btn-custom" > ${mTrueButton ? mTrueButton : 'Ok'} </button>
                                    <button type="button" id="alert-false" class="btn btn-custom" > ${mFalseButton ? mFalseButton : 'Cancel'} </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

        parent.appendChild(alertContainer);

        // Show the modal
        var confirmationModal = new bootstrap.Modal(document.getElementById('confirmation-modal'), {
            backdrop: 'static'
        });

        confirmationModal.show();

        // Handle Confirm button click
        alertContainer.querySelector('#alert-true').addEventListener('click', function () {
            confirmationModal.hide();
            resolve(true);  // Resolve the promise with true
        });

        // Handle Cancel button click
        alertContainer.querySelector('#alert-false').addEventListener('click', function () {
            confirmationModal.hide();
            resolve(false);  // Resolve the promise with false
        });

        // Optionally handle modal close (e.g., via the close button or outside click)
        $(alertContainer.querySelector('#confirmation-modal')).on('hidden.bs.modal', function () {
            resolve(false);  // Resolve the promise with false if the modal is closed without any action
            alertContainer.remove();  // Clean up the modal element
        });
    });
}