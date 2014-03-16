$(()->
  $(document.form['login']).on 'submit',((e)->
   form=$(this);
   $.ajax
     url:'/login'
     method:'POST'
     data:form.serialize()
   false
  );
);
