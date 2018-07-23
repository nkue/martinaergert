window.asserts = (function () {
    "use strict";

    return {
        isTruthy( selectedValue, name ) {
            if ( !selectedValue ) {
                throw new Error( `    ${name} has value: ${selectedValue} and is not truthy!` );
            }
        },
        isFalsy( selectedValue, name ) {
            if ( selectedValue ) {
                throw new Error( `    ${name} has value: ${selectedValue} and is not falsy!` );
            }
        },
        toBe( value1, value2, name ) {
            if ( value1 !== value2 ) {
                throw new Error( `    ${name}: ${value1} is not strictly equal to ${value2}` );
            }
        },
        isSameType( value1, value2 ) {
            if ( typeof value1 !== typeof value2 ) {
                throw new Error( `    ${name}: ${value1} is not the same type as ${value2} and therefore not strictly equal` );
            }
            return true;
        },
        eitherBothOrNoNull( value1, value2 ) {
            if ( value1 === null && value2 !== null || value1 !== null && value2 === null ) {
                throw new Error( `    ${name}: ${value1} is not strictly equal to ${value2}` );
            }
            return true;
        },
        isArray( value1, value2 ) {
            if ( Array.isArray( value1 ) !== Array.isArray( value2 ) ) {
                throw new Error( `    ${name}: ${value1} & ${value2} are not both arrays` );
            } else if ( Array.isArray( value1 ) && Array.isArray( value2 ) ) {
                return true;
            }
            return false;
        },
        isEqualLengthArray( value1, value2 ) {
            if ( value1.length !== value2.length ) {
                throw new Error( `    ${name}: ${value1} are not the same length ${value2} and, therefore, not strictly equal` );
            }
            return true;
        },
        isEqual( value1, value2 ) {
            if ( value1 && value2 ) {
                if ( value1 === value2 ) {
                    return;
                }
                this.isSameType( value1, value2 );
                this.eitherBothOrNoNull( value1, value2 );
                if ( this.isArray( value1, value2 )) {
                    if (this.isEqualLengthArray( value1, value2 )) {
                        value1.forEach(( name, index ) => {
                            if ( name !== value2[index] ) {
                                throw new Error( `    ${name}: ${value1} is not strictly equal to ${value2}` );
                            }
                        });
                    }
                }
                if ( typeof value1 === "object" ) {
                    const value2PropertyDescriptor = Object.entries( value2 );
                    Object.entries( value1 ).forEach(( [ key, value ], index ) => {
                        if ( value2PropertyDescriptor[index][0] !== key ) {
                            throw new Error( `    ${name}: ${value1} is not strictly equal to ${value2}` );
                        }
                        
                        if ( typeof value === typeof value2PropertyDescriptor[index][1] && typeof value === "object" ) {
                            return this.isEqual( value, value2PropertyDescriptor[index][1] );
                        }
                        
                        if ( value2PropertyDescriptor[index][1] !== value ) {
                            throw new Error( `    ${name}: ${value1} is not strictly equal to ${value2}` );
                        }
                    });
                }
            } else {
                throw new Error( `    ${name}: ${value1} is not strictly equal to ${value2}` );
            }
        }
    };
})();