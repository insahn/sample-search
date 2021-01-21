import { gql, useQuery, ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React, { useState } from 'react';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query($search: String, $sort: [UserSort], $perPage: Int, $page: Int) {\n    Page(perPage: $perPage, page: $page) {\n      users(search: $search, sort: $sort) {\n        id\n        name\n      }\n      pageInfo {\n        total\n        currentPage\n        lastPage\n        hasNextPage\n        perPage\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var GET_USERS = gql(_templateObject());

var App = function App() {
  var _data$Page, _data$Page2;

  var _useState = useState(1),
      _useState2 = _slicedToArray(_useState, 2),
      page = _useState2[0],
      setCurrentPage = _useState2[1];

  var _useState3 = useState(""),
      _useState4 = _slicedToArray(_useState3, 2),
      search = _useState4[0],
      setSearch = _useState4[1];

  var nextPage = React.useCallback(function () {
    setCurrentPage(function (p) {
      return p + 1;
    });
  }, []);
  var prevPage = React.useCallback(function () {
    setCurrentPage(function (p) {
      return p - 1;
    });
  }, []);
  var handleChange = React.useCallback(function (e) {
    return setSearch(e.target.value);
  }, []);

  var _useQuery = useQuery(GET_USERS, {
    variables: {
      search: search,
      sort: "USERNAME_DESC",
      page: page,
      perPage: 20
    }
  }),
      loading = _useQuery.loading,
      data = _useQuery.data;

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      paddingRight: "10px"
    }
  }, "Search user"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: search,
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return prevPage();
    },
    disabled: page <= 1 || loading
  }, "prev"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return nextPage();
    },
    disabled: !(data !== null && data !== void 0 && (_data$Page = data.Page) !== null && _data$Page !== void 0 && _data$Page.pageInfo.hasNextPage) || loading
  }, "next")), loading ? "Loading..." : /*#__PURE__*/React.createElement("div", null, data === null || data === void 0 ? void 0 : (_data$Page2 = data.Page) === null || _data$Page2 === void 0 ? void 0 : _data$Page2.users.map(function (user) {
    return /*#__PURE__*/React.createElement("div", {
      key: user.id
    }, user.id, ": ", user.name);
  })));
};

var client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache({
    addTypename: false
  })
});
var SampleSearch = function SampleSearch() {
  return /*#__PURE__*/React.createElement(ApolloProvider, {
    client: client
  }, /*#__PURE__*/React.createElement(App, null));
};

export { SampleSearch };
