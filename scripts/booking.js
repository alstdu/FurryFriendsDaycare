document.querySelector( '.pet-sitting-form' ).addEventListener( 'submit', ( e ) => {
    e.preventDefault(); // it's 2023 we don't reload the page on form submission

    document.querySelector( '.section-3' ).className = 'section-3';
} );
