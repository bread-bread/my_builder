export default () => {
    $('.sidebar__trigger').on('click', function(e){
        e.preventDefault();
        $('.sidebar').animate({
            'width': '80%'
        });
        $('.sidebar').addClass('active');
    });
    $(document).on('click', function(e){
        var $this = $(e.target);
        if(!$this.closest('.sidebar').length && $('.sidebar').hasClass('active')) {
            $('.sidebar').animate({
                'width': '0'
            });
            $('.sidebar').removeClass('active');
        }
    })
}