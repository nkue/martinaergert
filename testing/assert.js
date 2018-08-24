const scope = window;

scope.asserts = (function () {
    "use strict";

    function _isValueNull( value ) {
        if ( value === null ) {
            return true;
        }

        return false;
    };

    function _areValueNull( value1, value2 ) {
        if ( _isValueNull( value1 ) && _isValueNull( value2 ) ) {
            return true;
        }
        
        return false;
    };

    function _isTypeUndefined( value ) {
        if ( typeof value === "undefined") {
            return true;
        }

        return false;
    };

    function _areTypeUndefined( value1, value2 ) {
        if ( _isTypeUndefined( value1 ) && _isTypeUndefined( value2 )) {
            return true;
        }

        return false;
    };

    function _isValueNaN( value ) {
        if ( Number.isNaN( value ) ) {
            return true;
        }

        return false;
    };

    function _areValueNaN( value1, value2 ) {
        if ( _isValueNaN( value1 ) && _isValueNaN( value2 ) ) {
            return true;
        }

        return false;
    };

    function _isTruthy( value ) {
        if ( value ) {
            return true;
        }

        return false;
    };

    function _isFalsy( value ) {
        if ( !value ) {
            return true;
        }

        return false;
    };

    function _areStrictlyEqual( value1, value2 ) {
        if ( value1 === value2 ) {
            return true;
        }

        return false;
    };

    function _areSameType( value1, value2 ) {
        if ( typeof value1 === typeof value2 ) {
            return true;
        }
        
        return false;
    };

    function _isPrimitiveType( value ) {
        if ( _isTypeArray( value )) {
            return false;
        }

        if ( _isTypeObject( value )) {
            return false;
        }

        return true;
    };

    function _arePrimitiveType( value1, value2 ) {
        if ( _isPrimitiveType( value1 ) && _isPrimitiveType( value2 ) ) {
            return true;
        }

        return false;
    }

    function _areSameTypeDeep( value1, value2 ) {
        if ( _arePrimitiveType( value1, value2 ) ) { // refactor with _areSameType on top and rest not nested
            if ( _areValueNull( value1, value2 ) ) {
                return true;
            }

            if ( _areTypeUndefined( value1, value2 ) ) {
                return true;
            }

            if ( _areValueNaN( value1, value2 ) ) {
                return true;
            }

            return _areSameType( value1, value2 );
        }

        if ( _areTypeArray( value1, value2 ) ) {
            return true;
        }

        if ( _areTypeObject( value1, value2 ) ) {
            return true;
        }

        return false;
    };

    function _isTypeArray( value ) {
        if ( Array.isArray( value ) ) {
            return true;
        }

        return false;
    };

    function _areTypeArray( value1, value2 ) {
        if ( _isTypeArray( value1 ) && _isTypeArray( value2 ) ) {
            return true;
        }

        return false;
    };

    function _isTypeObject( value ) {
        if ( typeof value === "object" && !_isTypeArray( value ) ) {
            if ( !_isValueNull( value ) ) {
                return true;
            }
        }

        return false;
    };

    function _areTypeObject( value1, value2 ) {
        if ( _isTypeObject( value1 ) && _isTypeObject( value2 ) ) {
            return true;
        }

        return false;
    };

    function _areSameLength( value1, value2 ) {
        if ( value1.length === value2.length ) {
            return true;
        }

        return false;
    };

    function _areEqualArray( value1, value2 ) {
        if ( _areStrictlyEqual( value1, value2 ) ) {
            return true;
        }
        
        if ( !_areSameLength( value1, value2 ) ) {
            return false;
        }

        if ( !_areTypeArray( value1, value2 ) ) {
            return false;
        }

        return value1.every(( item, index ) => {
            if ( _areStrictlyEqual( item, value2[index] )) {
                return true;
            }
            
            if ( _areValueNaN( item, value2[index] ) ) {
                return true;
            }

            if ( _areTypeArray( item, value2[index] ) ) {
                return _areEqualArray( item, value2[index] );
            }

            if ( _areTypeObject( item, value2[index] ) ) {
                return _areEqualObject( item, value2[index] );
            }
        })
    };

    function _areEqualObject( value1, value2 ) {
        if ( _areStrictlyEqual( value1, value2 ) ) {
            return true;
        }
        
        if ( !_areTypeObject( value1, value2 ) ) {
            return false;
        }

        return Object.entries( value1 ).every(( [ key, value ] ) => {
            if ( !value2.hasOwnProperty( key ) ) {
                return false;
            }

            if ( _areStrictlyEqual( value, value2[key] )) {
                return true;
            }

            if ( _areValueNaN( value, value2[key] ) ) {
                return true;
            }

            if ( _areEqualArray( value, value2[key] ) ) {
                return true;
            }

            if ( _areEqualObject( value, value2[key] ) ) {
                return true;
            }

            return false;
        });
    };

    function _areEqualDeep( value1, value2 ) {
        if ( _areValueNaN( value1, value2 ) ) {
            return true;
        }

        if ( _areStrictlyEqual( value1, value2 ) ) {
            return true;
        }

        if ( _areEqualArray( value1, value2 ) ) {
            return true;
        }

        if ( _areEqualObject( value1, value2 ) ) {
            return true;
        }

        return false;
    }

// --------------------------------

    function isTruthy( value ) {
        if ( !_isTruthy( value )) {
            throw new Error(`${value}`);
        }
    };

    function isFalsy( value ) {
        if ( !_isFalsy( value )) {
            throw new Error(`${value}`);
        }
    };

    function areSameType( value1, value2 ) {
        if ( !_areSameType( value1, value2 )) {
            throw new Error(`${value1}, ${value2}`);
        }
    };

    function areNotSameType( value1, value2 ) {
        if ( _areSameType( value1, value2 ) ) {
            throw new Error(`${value1}, ${value2}`);
        }
    };

    function areSameTypeDeep( value1, value2 ) {
        if ( !_areSameTypeDeep( value1, value2 ) ) {
            throw new Error(`${value1}, ${value2}`);
        }
    };

    function areNotSameTypeDeep() {
        if ( _areSameTypeDeep( value1, value2 ) ) {
            throw new Error(`${value1}, ${value2}`);
        }
    }

    function areEqualShallow( value1, value2 ) {
        if ( !_areStrictlyEqual( value1, value2 ) ) {
            throw new Error(`${value1}, ${value2} aren't equal`);
        }
    };

    function areNotEqualShallow() {
        if ( _areStrictlyEqual( value1, value2 ) ) {
            throw new Error(`${value1}, ${value2} are equal`);
        }
    };

    function areEqualArray( value1, value2 ) {
        if ( !_areEqualArray( value1, value2 ) ) {
            throw new Error(`${value1}, ${value2} aren't equal`);
        }
    };

    function areNotEqualArray( value1, value2 ) {
        if ( _areEqualArray( value1, value2 ) ) {
            throw new Error(`${value1}, ${value2}`);
        }
    };

    function areEqualObject( value1, value2 ) {
        if ( !_areEqualObject( value1, value2 ) ) {
            throw new Error(`${value1}, ${value2} aren't equal`);
        }
    };

    function areNotEqualObject( value1, value2 ) {
        if ( _areEqualObject( value1, value2 )) {
            throw new Error(`${value1}, ${value2}`);
        }
    };

    function areEqualDeep( value1, value2 ) {
        if ( !_areEqualDeep( value1, value2 ) ) {
            throw new Error(`${value1}, ${value2} aren't equal`);
        }
    };

    function areNotEqualDeep( value1, value2 ) {
        if ( _areEqualDeep( value1, value2 ) ) {
            throw new Error(`${value1}, ${value2} are equal`);
        }
    };

// -----------------------------------

    return {
        isTruthy,
        isFalsy,
        areSameType,
        areNotSameType,
        areSameTypeDeep,
        areNotSameTypeDeep,
        areEqualShallow,
        areNotEqualShallow,
        areEqualArray,
        areNotEqualArray,
        areEqualObject,
        areNotEqualObject,
        areEqualDeep,
        areNotEqualDeep
    };
})();