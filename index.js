/**
 * 生成随机图片
 *
 * @author ccbikai
 * 使用方法: `{{ picLink | randomPic 320 400 }}`
 */
exports.install = function(Vue, options) {
    var api = options || 'https://unsplash.it';

    // register the randomPic filter
    Vue.filter('randomPic', function(value, width, height) {
        return value || api + "/" + width + "/" + height + "?random=" + parseInt(Math.random() * 10, 10);
    });
};
