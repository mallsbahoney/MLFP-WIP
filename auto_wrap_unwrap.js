export function autoWrap(token) {
    return `Simulating wrap of ${token} to w${token} via Raydium.`;
}

export function autoUnwrap(wrappedToken) {
    return `Simulating unwrap of ${wrappedToken} to native token via MoonPay.`;
}