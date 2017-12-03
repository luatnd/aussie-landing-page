/**
 * '../../assets/images/node.jpg' --> './assets/images/node.jpg'
 * './assets/images/node.jpg' --> './assets/images/node.jpg'
 * '/assets/images/node.jpg' --> '/assets/images/node.jpg'
 *
 * @param {string} url
 * @returns {string}
 */
export function resolveStaticAssetUrl(url) {
  if (url.length > 2 && url.indexOf('../') === 0) {
    return './' + url.replace(/\.\.\//g, '');
  } else {
    return url;
  }
}