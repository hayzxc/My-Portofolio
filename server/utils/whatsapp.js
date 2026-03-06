/**
 * WhatsApp utility functions
 * Handles message formatting and wa.me link generation
 */

/**
 * Format a visitor's message into a structured WhatsApp-ready text
 * @param {string} name - Visitor name
 * @param {string} email - Visitor email
 * @param {string} message - Visitor message
 * @returns {string} Formatted message text
 */
export function formatMessage(name, email, message) {
    return [
        `📩 *New Portfolio Message*`,
        ``,
        `👤 *Name:* ${name}`,
        `📧 *Email:* ${email}`,
        ``,
        `💬 *Message:*`,
        message,
        ``,
        `---`,
        `_Sent from HK Portfolio Chat_`,
    ].join('\n');
}

/**
 * Generate a WhatsApp deep link (wa.me)
 * @param {string} number - WhatsApp number with country code (no + or spaces)
 * @param {string} text - Pre-filled message text
 * @returns {string} Full wa.me URL
 */
export function generateWhatsAppLink(number, text) {
    const encoded = encodeURIComponent(text);
    return `https://wa.me/${number}?text=${encoded}`;
}
