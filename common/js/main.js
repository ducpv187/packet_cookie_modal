$(document).ready(function() {
    const cookieModal = document.cookie.split('; ');
    // console.log(cookieModal);
    if(!cookieModal.includes('MODAL_COOKIE=yes')){        
        setTimeout(function(){
            openModal($('#btn-1'));
        },1000)    
    }       
});

$('.js-modal-cookie').click(function(){
    closeModal($(this));
    let timeToAdd = 1000 * 60 * 60 * 24;
    let date = new Date();
    let expiryTime = parseInt(date.getTime()) + timeToAdd;
    date.setTime(expiryTime);
    let utcTime = date.toUTCString();
    document.cookie = "MODAL_COOKIE=yes; expires=" + utcTime + ";";
    console.log(document.cookie);
})

$(document).on('click', '.js-modal-cookie', function(){    
    closeModal($(this));
    let timeToAdd = 1000 * 60 * 60 * 24;
    let date = new Date();
    let expiryTime = parseInt(date.getTime()) + timeToAdd;
    console.log(expiryTime);
    date.setTime(expiryTime);
    let utcTime = date.toUTCString();
    document.cookie = "MODAL_COOKIE=yes; expires=" + utcTime + ";";
})

$(document).on('click', '.js-modal-open', function(){    
    openModal($(this));
})

$(document).on('click', '.js-modal-close , .modal-overlay', function(){    
    closeModal($(this));
})

//open modal
function openModal($this){    
    let modal = $this.parents('.main').find('.modal');
    modal.addClass('modal-active');
    setTimeout(function(){
        modal.addClass('modal-fade');
    },500)
}

//close modal
function closeModal($this){
    let modal = $this.parents('.modal');
    modal.removeClass('modal-fade');
    setTimeout(() => {
        modal.removeClass('modal-active');
    }, 1000);    
}