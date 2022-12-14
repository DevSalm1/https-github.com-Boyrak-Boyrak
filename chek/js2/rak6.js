/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var getUrl = document.location;var baseUrl = getUrl.origin+'/'+getUrl.pathname.split('/')[0];
var spinner = '<div class="text-center"><img src="'+baseUrl+'public/templates/website/script-assist/images/loading.svg" width="62"></div>';

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});
$(document).on({
    "contextmenu": function (e) {
        console.log("ctx menu button:", e.which); 

        // Stop the context menu
        e.preventDefault();
    },
    "mousedown": function(e) { 
        console.log("normal mouse down:", e.which); 
    },
    "mouseup": function(e) { 
        console.log("normal mouse up:", e.which); 
    }    
});
$(window).bind('contextmenu', false);
document.onkeydown = function(e) {
    if(e.keyCode == 123) {
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
     return false;
    }      
 }
$(document).ready(function () {
    $('#changeLang').click(function(){
        var url = $(this).attr('rel');
        var data = 'redir='+url;
        $.ajax({
            type: 'POST',
            data: data,
            url: baseUrl+'index/change-lang',
            beforeSend: function(){
                $('#changeLang').html('<i class="fas ti-settings fa-spin" style="position: absolute;padding: 5px;"></i>');
            },success: function(e){
                $('#changeLang').html(e);
            }
         });
    });
    return false;
})

$(document).ready(function () {
    $('[id = LoginMember]').on('click' , function(){
        if(isIos()){
            var post_link = $(this).attr("target");
            var settings  = $(this).attr('setting-data');
            url = baseUrl+post_link;
            url2 = baseUrl+settings;
            window.location.href = url;
            setTimeout(function (){
                window.location.href = url2;
            }, 1500);
            return false;
        }else{
            swal("Attention!", "It is only allowed to log in through the iPhone and iPad only, and if you are already using an iPhone or iPad, go to Settings and disable the option to request desktop for all sites", "error");
            return false;
        }
        return false;
    });
    function isIos(){
        if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){
            return true;
        }
        return false;
    }
    
});

$('#globalUserProfile').ajaxForm({
    url: baseUrl+'Members/edit-member-profile',
    type: 'POST',
    beforeSend: function(){
        $('#profileResult').html('<div class="text-center m-t-10">'+spinner+'</div>');
    },success: function(e){
        $('#profileResult').html(e);
    }
});
$('#LoginGlobalFrom').ajaxForm({
    url: baseUrl+'Members/sgin-in',
    type: 'POST',
    beforeSend: function(){
        $('#loginResult').html('<div class="text-center m-t-10">'+spinner+'</div>');
    },success: function(e){
        $('#loginResult').html(e);
    }
});
$('#forgetPasswordFrom').ajaxForm({
    url: baseUrl+'Members/forget-password',
    type: 'POST',
    beforeSend: function(){
        $('#loginResult').html('<div class="text-center m-t-10">'+spinner+'</div>');
    },success: function(e){
        $('#loginResult').html(e);
    }
});
$('#resetPasswordFrom').ajaxForm({
    url: baseUrl+'Members/reset-password',
    type: 'POST',
    beforeSend: function(){
        $('#loginResult').html('<div class="text-center m-t-10">'+spinner+'</div>');
    },success: function(e){
        $('#loginResult').html(e);
    }
});
$('#androidLoginFrom').ajaxForm({
    url: baseUrl+'Android/sgin-in',
    type: 'POST',
    beforeSend: function(){
        $('#loginResult').html('<div class="text-center m-t-10">'+spinner+'</div>');
    },success: function(e){
        $('#loginResult').html(e);
    }
});
$('#contactUsForm').ajaxForm({
    url: baseUrl+'Contact_us/save-message',
    type: 'POST',
    beforeSend: function(){
        $('#conReslt').html('<div class="text-center m-t-10">'+spinner+'</div>');
    },success: function(e){
        $('#conReslt').html(e);
    }
});


$('#payment_method').change(function(){
    var change = $(this).val();
    switch(change){
        case 'bank':
            $('#westron_tab').hide();
            $('#online_tab').hide();
            $('#paypal_tab').hide();
            $('#walit_tab').hide();
            $('#coupon_tab').hide();
            $('#bank_tab').fadeIn(300);
            $('#westronImage').val(null);
            $('#bankImage').val(null);
            $('#walitImage').val(null);
        break;
        case 'online_link':
            $('#westron_tab').hide();
            $('#bank_tab').hide();
            $('#paypal_tab').hide();
            $('#walit_tab').hide();
            $('#coupon_tab').hide();
            $('#online_tab').fadeIn(300);
            $('#westronImage').val(null);
            $('#bankImage').val(null);
            $('#walitImage').val(null);
        break;
        case 'paypal_me':
            $('#westron_tab').hide();
            $('#bank_tab').hide();
            $('#online_tab').hide();
            $('#walit_tab').hide();
            $('#coupon_tab').hide();
            $('#paypal_tab').fadeIn(300);
            $('#westronImage').val(null);
            $('#bankImage').val(null);
            $('#walitImage').val(null);
        break;
        case 'westron':
            $('#paypal_tab').hide();
            $('#bank_tab').hide();
            $('#online_tab').hide();
            $('#walit_tab').hide();
            $('#coupon_tab').hide();
            $('#westron_tab').fadeIn(300);
            $('#westronImage').val(null);
            $('#bankImage').val(null);
            $('#walitImage').val(null);
        break;
        case 'walit':
            $('#paypal_tab').hide();
            $('#bank_tab').hide();
            $('#online_tab').hide();
            $('#westron_tab').hide();
            $('#coupon_tab').hide();
            $('#walit_tab').fadeIn(300);
            $('#westronImage').val(null);
            $('#bankImage').val(null);
            $('#walitImage').val(null);
        break;
        case 'coupon':
            $('#paypal_tab').hide();
            $('#bank_tab').hide();
            $('#online_tab').hide();
            $('#westron_tab').hide();
            $('#walit_tab').hide();
            $('#coupon_tab').fadeIn(300);
            $('#westronImage').val(null);
            $('#bankImage').val(null);
            $('#walitImage').val(null);
        break;
        default:
            $('#paypal_tab').hide();
            $('#bank_tab').hide();
            $('#online_tab').hide();
            $('#westron_tab').hide();
            $('#walit_tab').hide();
            $('#coupon_tab').hide();
            $('#westronImage').val(null);
            $('#bankImage').val(null);
            $('#walitImage').val(null);
        break;
    }
});