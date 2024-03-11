"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tailwind_merge_1 = require("tailwind-merge");
function Skeleton(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<div className={(0, tailwind_merge_1.twMerge)('bg-zinc-50/10 animate-pulse rounded-md', className)} {...props}/>);
}
exports.default = Skeleton;