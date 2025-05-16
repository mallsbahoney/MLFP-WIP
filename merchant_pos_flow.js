export function calculateFiatAmount(amount, markupPercent = 5, protocolFee = 1) {
    const markup = (markupPercent / 100) * amount;
    const protocol = (protocolFee / 100) * amount;
    return {
        originalAmount: amount,
        markup,
        protocol,
        totalDue: amount + markup + protocol,
    };
}