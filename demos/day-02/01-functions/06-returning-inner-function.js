// isUserAuthorized (inner function) is able to use the outer function's (authorize) variables (allowedRoles), even after the outer function finishes execution
function authorize(allowedRoles) {
    function isUserAuthorized(user) {
        return allowedRoles.includes(user.role);
    }

    return isUserAuthorized; // you are returning the inner function
}

// allowedRoles array passed will continue to remain in memory and accessible to authorizeAdminCustomer
const authorizeAdminCustomer = authorize(['admin', 'customer']);
const result = authorizeAdminCustomer({
    name: 'John',
    role: 'customer'
});
console.log(result);

const authorizeStore = authorize(['store_keeper', 'inventory_manager']);
const result2 = authorizeStore({
    name: 'Jane',
    role: 'store_keeper'
});
console.log(result2);