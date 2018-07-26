window.asserts = (function () {
    "use strict";

    function eitherBothOrNoNull( value1, value2 ) {
        if ( value1 === null && value2 !== null || value1 !== null && value2 === null ) {
            throw new Error( `    ${name}: ${value1} is not strictly equal to ${value2}` );
        }
        return true;
    }

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
            if ( Array.isArray( value1 ) !== Array.isArray( value2 ) ) {
                throw new Error( `    ${name}: ${value1} is not the same type as ${value2} and therefore not strictly equal` );
            }
            if ( (value1 === null) !== (value2 === null) ) {
                throw new Error( `    ${name}: ${value1} is not the same type as ${value2} and therefore not strictly equal` );
            }
        },
        isEqualArray( value1, value2 ) {
            if ( Array.isArray( value1 ) !== Array.isArray( value2 ) ) {
                throw new Error( `    ${name}: ${value1} is not the same type as ${value2} and therefore not strictly equal` );
            }
            if ( value1.length !== value2.length ) {
                throw new Error( `    ${name}: ${value1} are not the same length ${value2} and, therefore, not strictly equal` );
            }

            if ( Array.isArray( value1 ) && Array.isArray( value2 ) ) {
                value1.forEach(( name, index ) => {
                    if ( name !== value2[index] ) {
                        try {
                            Array.isArray( name ) !== Array.isArray( value2[index] );
                            throw new Error( `    ${name}: ${value1} is not strictly equal to ${value2}` );
                        } catch ( error ) {
                            this.isEqualArray( name, value2[index] );
                        }
                    }
                    return this.isEqual( name, value2[index] );
                });
            }
        },
        isEqual( value1, value2 ) {
            if ( value1 === value2 ) {
                return;
            }
            this.isSameType( value1, value2 );
            eitherBothOrNoNull( value1, value2 );
            this.isEqualArray( value1, value2 );
            
            if ( typeof value1 === "object" && !Array.isArray( value1 ) ) {
                Object.entries( value1 ).forEach(( [ key, value ] ) => {
                    if ( !value2.hasOwnProperty( key ) ) {
                        throw new Error( `    ${name}: ${value1} is not strictly equal to ${value2}` );
                    }
                    
                    if ( !Object.values(value2).includes(value) ) {
                        try {
                            typeof value !== "object";
                            throw new Error( `    ${name}: ${value1} is not strictly equal to ${value2}` );
                        } catch ( error ) {
                            return this.isEqual( value, value2[key] );
                        }
                    }

                    return this.isEqual( value, value2[key] );
                });
            }
        },
        isNotEqual( value1, value2 ) {
            try {
                this.isEqual( value1, value2 );
                throw new Error( `    ${name}: ${value1} is strictly equal to ${value2}` );
            } catch( error ) {
                // ignore incoming error
            }
        },
        isNotEqualArray( value1, value2 ) {
            try {
                this.isEqual( value1, value2 );
                throw new Error( `    ${name}: ${value1} is strictly equal to ${value2}` );
            } catch( error ) {
                // ignore incoming error
            }
        }
    };
})();