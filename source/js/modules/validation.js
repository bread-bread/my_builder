// tooltip
var createQtip = function (element, direction) {
    direction = direction || 'left';
    var position = {
        left: {
            my: 'center right',
            at: 'center left'
        },
        right: {
            my: 'center left',
            at: 'center right'
        },
        bottom: {
            my: 'bottom center',
            at: 'top center'
        },
        top: {
            my: 'bottom center',
            at: 'top center'
        }
    };
    element.qtip({
        content: {
            text: function () {
                return $(this).data('content');
            }
        },
        show: {
            event: 'show'
        },
        hide: {
            event: 'keydown click hideTooltip',
            event: 'focus',
            inactive: 1800
        },

        position: position[direction],
        style: {
            classes: 'qtip-mystyle qtip-rounded',
            tip: {
                height: 7,
                width: 10
            }
        }
    }).trigger('show');
}
var addError = function (element) {
    element.addClass('error');
    createQtip(element, element.data('position'));
}
var validation = function (form) {
    let inputs = $(form).find('input[data-content]');
    let flag = true;
    $(inputs).each(function (ndx, element) {
        if ($(element).val() == '') {
            flag = false;
            addError($(element));
            // $('#success').find('.modal__text').text($(element).data('content'));
            // $('#success').fadeIn(300);
        }
    });
    return flag;
}
export default validation;