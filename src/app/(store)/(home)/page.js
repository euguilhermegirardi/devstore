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
exports.metadata = void 0;
const api_1 = require("@/data/api");
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
exports.metadata = {
    title: 'Home',
};
function getFeaturedProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, api_1.api)('/products/featured', {
            next: {
                revalidate: 60 * 60, // 1 hour
            },
        });
        const products = yield response.json();
        return products;
    });
}
function Home() {
    return __awaiter(this, void 0, void 0, function* () {
        const [highlightedProduct, ...otherProducts] = yield getFeaturedProducts();
        return (<div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <link_1.default href={`/product/${highlightedProduct.slug}`} className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">
        <image_1.default src={highlightedProduct.image} alt={highlightedProduct.title} className="group-hover:scale-105 transition-transform duration-500" width={920} height={920} quality={100}/>

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-small truncate">
            {highlightedProduct.title}
          </span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {highlightedProduct.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </link_1.default>

      {otherProducts.map((product) => {
                return (<link_1.default key={product.id} href={`/product/${product.slug}`} className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">
            <image_1.default src={product.image} alt={product.title} className="group-hover:scale-105 transition-transform duration-500" width={920} height={920} quality={100}/>

            <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-small truncate">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {product.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    })}
              </span>
            </div>
          </link_1.default>);
            })}
    </div>);
    });
}
exports.default = Home;
