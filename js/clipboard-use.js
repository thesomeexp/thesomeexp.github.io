/*create copy button when page loaded*/
!function (e, t, a) {
    /* code */
    var initCopyCode = function(){
      var copyHtml = '';
      copyHtml += '<button class="btn-copy" data-clipboard-snippet>';
      copyHtml += '  <i class="fa fa-globe"></i><span>copy</span>';
      copyHtml += '</button>';
      var highlightItems = document.querySelectorAll('.highlight .code')
      highlightItems.forEach(function(userItem) {
        userItem.innerHTML = copyHtml + userItem.innerHTML
      });
      new ClipboardJS('.btn-copy', {
          target: function(trigger) {
              return trigger.nextElementSibling;
          }
      });
    }
    initCopyCode();
  }(window, document);