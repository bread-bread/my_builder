import validation from './validation';

// export default () => {
//     const f = $('#feedback');
//     f.on('submit', function(event){
//         event.preventDefault();
//         let data = {};
//         if(validation(this)){
//             console.log('Mail was sent')
//         }
//     });
// };

/* Trying */
export default () => {
    var f = $('#feedback');
    f.on('submit', function(event){
        event.preventDefault();
        if(validation(this)){
            var fData = f.serialize();
            $.ajax({
                url: '../../mailer.php',
                type: "POST",
                data: fData,
                success: function(data) {
                    var modal = data.status ? "#success" : '#error';
                    $(modal).fadeIn(300, function(){
                        console.log('Animation complete');
                    })
                }
            })
        }
    })
    var inputs = f.find('input[data-content]');
    f.on('reset', function(){
        this.reset();
        $(inputs).each(function(ndx, element){
            $(element).removeClass('error');
            $(element).trigger('hideTooltip');
        })
    })
    inputs.on('focus', function(){
        $(this).removeClass('error');
        $(this).trigger('hideTooltip');
    })
    $('.modal__button').on('click', function(event){
        event.preventDefault();
        $(this).fadeOut(300);
    })
}