"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skeleton_1 = __importDefault(require("@/components/skeleton"));
function HomeLoading() {
    return (<div className="h-full grid grid-cols-9 grid-rows-6 gap-6">
      <skeleton_1.default className="col-span-6 row-span-6 h-[856px]"/>
      <skeleton_1.default className="col-span-3 row-span-3"/>
      <skeleton_1.default className="col-span-3 row-span-3"/>
    </div>);
}
exports.default = HomeLoading;
