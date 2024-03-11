"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const google_1 = require("next/font/google");
require("./globals.css");
const inter = (0, google_1.Inter)({ subsets: ['latin'], variable: '--font-inter' });
exports.metadata = {
    title: {
        template: '%s | devstore',
        default: 'devstore',
    },
};
function RootLayout({ children, }) {
    return (<html className={inter.variable} lang="en">
      <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
    </html>);
}
exports.default = RootLayout;
