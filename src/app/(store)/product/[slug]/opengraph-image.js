"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentType = exports.size = exports.alt = exports.runtime = void 0;
const api_1 = require("@/data/api");
const env_1 = require("@/env");
const og_1 = require("next/og");
const colors_1 = __importDefault(require("tailwindcss/colors"));
// Route segment config
exports.runtime = 'edge';
// Image metadata
exports.alt = ' ';
exports.size = {
    width: 1200,
    height: 630,
};
exports.contentType = 'image/png';
function getProduct(slug) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, api_1.api)(`/products/${slug}`, {
            next: {
                revalidate: 60 * 60, // 1 hour
            },
        });
        const products = yield response.json();
        return products;
    });
}
// Image generation
function OgImage({ params, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const product = yield getProduct(params.slug);
        const productImageURL = new URL(product.image, env_1.env.APP_URL).toString();
        return new og_1.ImageResponse((
        // ImageResponse JSX element
        <div style={{
                background: colors_1.default.zinc[950],
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}>
        <img src={productImageURL} alt={product.description} style={{ width: '100%' }}/>
      </div>), Object.assign({}, exports.size));
    });
}
exports.default = OgImage;
