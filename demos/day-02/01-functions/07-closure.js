// i
function authorize(allowedRoles) {
    function isUserAuthorized(user) {
        return allowedRoles.includes(user.role);
    }

    return isUserAuthorized; // you are returning the inner function
}

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