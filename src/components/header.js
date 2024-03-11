"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lucide_react_1 = require("lucide-react");
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const cart_widget_1 = require("./cart-widget");
function Header() {
    return (<header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <link_1.default href="/" className="text-2xl font-extrabold text-white">
          devstore
        </link_1.default>

        <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <lucide_react_1.Search className="w-5 h-5 text-zinc-500"/>
          <input placeholder="Search for products..." className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"/>
        </form>
      </div>

      <div className="flex items-center gap-4">
        <cart_widget_1.CartWidget />

        <div className="w-px h-4 bg-zinc-700"/>

        <link_1.default href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <image_1.default src="https://github.com/euguilhermegirardi.png" alt="profile" width={24} height={24} className="h-6 w-6 rounded-full"/>
        </link_1.default>
      </div>
    </header>);
}
exports.default = Header;
