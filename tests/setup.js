if (window.HTMLDialogElement) {
  window.HTMLDialogElement.prototype.show = function (){
    this.setAttribute('open', '');
  };
  window.HTMLDialogElement.prototype.showModal = function (){
    this.setAttribute('open', '');
  };
  window.HTMLDialogElement.prototype.close = function (){
    this.removeAttribute('open');
    this.dispatchEvent(new Event('close', { bubbles: true }));
  };
}  
