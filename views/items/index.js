






/* harmony default export */ var items_index = (function (props) {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
            children: "Items"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(items_index_module_scss_default.a.container, {
            children: props.items.map(function (item) {
                return /*#__PURE__*/Object(jsx_runtime_["jsx"])(items_index_module_scss_default.a.item, {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        href: "/items/".concat(item._id),
                        children: item.name
                    })
                }, item._id);
            })
        })]
    });
}



