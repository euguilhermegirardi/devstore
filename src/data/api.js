"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const env_1 = require("@/env");
function api(path, init) {
    const baseUrl = env_1.env.NEXT_PUBLIC_API_BASE_URL;
    const apiPrefix = '/api';
    const url = new URL(apiPrefix.concat(path), baseUrl);
    return fetch(url, init);
}
exports.api = api;
