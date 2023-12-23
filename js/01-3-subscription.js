/*
 * Напиши скрипт перевірки підписки користувача під час доступу до контенту
 * - Є три типи підписки: free, pro и vip.
 * - Отримати доступ можуть тільки pro и vip
 */

const sub = 'vip';

// якщо користувач pro або користувач vip тоді є доступ
//                          false            true
const canAccessContent = sub === 'pro' || sub === 'vip';


console.log('Є доступ до контенту? ', canAccessContent);