// Form handling for loan enquiry
document.addEventListener('DOMContentLoaded', function() {
    // Loan enquiry
    const enquiryForm = document.getElementById('enquiryForm');
    const enquirySuccess = document.getElementById('enquirySuccess');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Optionally: Add AJAX to send data to server here
            enquiryForm.reset();
            enquirySuccess.style.display = 'block';
            setTimeout(() => {
                enquirySuccess.style.display = 'none';
            }, 6000);
        });
    }

    // Admin reply (demo)
    const replyForm = document.getElementById('replyForm');
    const replySuccess = document.getElementById('replySuccess');
    if (replyForm) {
        replyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Optionally: Add AJAX to send reply to server/email here
            replyForm.reset();
            replySuccess.style.display = 'block';
            setTimeout(() => {