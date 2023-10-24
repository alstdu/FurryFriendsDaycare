const form = document.querySelector( '#newsletter-form' );

form.addEventListener('submit', ( e ) => {
    e.preventDefault(); // it's 2023 we don't reload the page on form submission
    console.log( 'submit' );

    // hide the form and show the confirmation message
    form.className = 'hide';
    // remove the existing classes (including "hide") and replaces with just the "confirmation-message" class
    document.querySelector( '.confirmation-message' ).className = 'confirmation-message';
});
