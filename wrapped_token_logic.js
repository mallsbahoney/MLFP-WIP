export function handleWrappedToken(token) {
    if (token.startsWith('w')) {
        return `Detected wrapped token: ${token}. Triggering unwrap logic...`;
    }
    return `Token ${token} is native. No unwrap needed.`;
}