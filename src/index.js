import React from "react";
import ReactDOM from "react-dom";
import { HttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

import registerServiceWorker from "./registerServiceWorker";
import App from "./App";

import "./style.css";

const GITHUB_BASE_URL = "https://api.github.com/graphql";
const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache,
});

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
