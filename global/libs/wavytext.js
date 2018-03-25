/*!
 * WavyText - a jquery plugin for making wavy, colorful text.
 * (c) 2015 Chris Tabor <dxdstudio@gmail.com>
 * See license for information
 * Licensed under MIT.
 * <3
 * http://github.com/christabor/wavytext
 */
 (function($){
    $.fn.wavyText = function(opts) {
        var defaults = {
            prefixes: ['-ms-', '-webkit-', '-o-', '-moz-', ''],
            animation_name: 'wave',
            transition_speed: '0.4s',
            keyframes: {
                '0': ['0', '50px'],
                '20': ['-2px', '49px'],
                '40': ['-5px', '48.5px'],
                '60': ['-10px', '48px'],
                '80': ['-5px', '49px'],
                '100': ['0', '50px']
            },
            char_classes: [],
            style_id: 'wavy-text-custom'
        };
        opts = $.extend(defaults, opts);
        var PROPS = [
            '-webkit-user-select: none;', /* prevent buggy behavior because of selection of text */
            '-moz-user-select: none;',
            '-ms-user-select: none;',
            'pointer-events: none;',
            'outline: 0;',
            'position: relative;',
            '-webkit-animation-timing-function: ease-out;',
            '-webkit-animation-iteration-count: 1;',
            '-webkit-animation-name: ' + opts.animation_name + ';',
            'animation-timing-function: ease-in-out;',
            'animation-iteration-count: 1;',
            'animation-name: ' + opts.animation_name + ';',
            '-webkit-animation-duration: ' + opts.transition_speed + ';',
            '-moz-animation-duration: ' + opts.transition_speed + ';',
            '-ms-animation-duration: ' + opts.transition_speed + ';',
            '-o-animation-duration: ' + opts.transition_speed + ';',
            'animation-duration: ' + opts.transition_speed + ';'
        ].join('');

        function _makeAnimationCSS(prefixes) {
            var str = '';
            var fg = $.map(opts.keyframes, function(css_props, percent){
                var position = 'top:' + css_props[0] + ';';
                var size = 'font-size:' + css_props[1] + ';';
                return percent + '% {' + position + size + '}';
            });
            $.each(opts.prefixes, function(_, prefix){
                str += '@' + prefix + 'keyframes ' + opts.animation_name + ' { ' + fg.join('') + '}';
            });
            return str;
        }

        function styleLetters(els) {
            $(els).each(function(k, el){
                var el = $(el);
                var letters = el.text().split('');
                el.empty();
                for(var i = 0; i < letters.length; i++) {
                    var delay = i * 0.1;
                    var delay_css = $.map(opts.prefixes, function(prefix, _){
                        return prefix + 'animation-delay:' + delay + 's;';
                    });
                    el.append('<span class="wave ' + opts.char_classes.join(' ') + '" style="' + delay_css.join('') + ' ">' + letters[i] + '</span>');
                }
            });
        }

        function init(els) {
            var $style = $('<style></style>');
            var wave_el_props = '.wave {' + PROPS + '}';
            if($('#' + opts.style_id).length > 0) $('#' + opts.style_id).remove();
            $style.attr({
                'type': 'text/css',
                'id': opts.style_id
            }).html(_makeAnimationCSS(opts.prefixes) + wave_el_props);
            $('head').append($style);
            styleLetters(els);
        }
        init(this);
    }
})(jQuery);
