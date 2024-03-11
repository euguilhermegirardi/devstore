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
exports.generateStaticParams = exports.generateMetadata = void 0;
const add_to_cart_button_1 = require("@/components/add-to-cart-button");
const api_1 = require("@/data/api");
const image_1 = __importDefault(require("next/image"));
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
function generateMetadata({ params, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const product = yield getProduct(params.slug);
        return {
            title: product.title,
        };
    });
}
exports.generateMetadata = generateMetadata;
function generateStaticParams() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, api_1.api)('/products/featured');
        const products = yield response.json();
        return products.map((product) => {
            return { slug: product.slug };
        });
    });
}
exports.generateStaticParams = generateStaticParams;
function Product({ params }) {
    return __awaiter(this, void 0, void 0, function* () {
        const product = yield getProduct(params.slug);
        return (<div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <image_1.default src={product.image} alt="" width={1000} height={1000} quality={100}/>
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>
        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            })}
          </span>
          <span className="text-sm text-zinc-400">
            Up to 12x{' '}
            {(product.price / 12).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            })}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>
          <div className="flex gap-2">
            <button type="button" className="flex h-9 w-14 items-center justify-center border border-zinc-700 bg-zinc-800 text-small font-semibold">
              P
            </button>
            <button type="button" className="flex h-9 w-14 items-center justify-center border border-zinc-700 bg-zinc-800 text-small font-semibold">
              M
            </button>
            <button type="button" className="flex h-9 w-14 items-center justify-center border border-zinc-700 bg-zinc-800 text-small font-semibold">
              G
            </button>
            <button type="button" className="flex h-9 w-14 items-center justify-center border border-zinc-700 bg-zinc-800 text-small font-semibold">
              GG
            </button>
          </div>
        </div>

        <add_to_cart_button_1.AddToCartButton productId={product.id}/>
      </div>
    </div>);
    });
}
exports.default = Product;
