// todo: grab the /relevant/ form and put it here
document.querySelector( '.pet-sitting-form' ).addEventListener( 'submit', ( e ) => {
    e.preventDefault(); // it's 2023 we don't reload the page on form submission
    console.log( 'submit' );

    // TODO: grab whatever element we have "hide" on and remove that class
    document.querySelector( '.section-3' ).className = 'section-3';
} );

console.log('foo');
