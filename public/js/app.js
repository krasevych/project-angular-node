// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    return $(document.forms['login']).on('submit', (function(e) {
      var form;
      form = $(this);
      $.ajax({
        url: '/login',
        method: 'POST',
        data: form.serialize()
      });
      return false;
    }));
  });

}).call(this);

//# sourceMappingURL=app.map
