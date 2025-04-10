$(document).ready(function(){
  // تأثير fade-in على الحاوية الرئيسية عند تحميل الصفحة
  $('.container').hide().fadeIn(1000);
  
  // حفظ البيانات في LocalStorage عند الضغط على زر "التالي" في الصفحة الأولى
  $('a[href="page2.html"]').on('click', function(){
    var heading1Text = $('h1').text();  // أخذ نص الـ h1
    var heading2Text = $('h2').text();  // أخذ نص الـ h2
    localStorage.setItem('heading1', heading1Text); // تخزين النص في LocalStorage
    localStorage.setItem('heading2', heading2Text); // تخزين النص في LocalStorage
  });
  
  // جلب البيانات من LocalStorage في الصفحة الثانية
  var heading1Text = localStorage.getItem('heading1');
  var heading2Text = localStorage.getItem('heading2');
  
  // عرض البيانات المسترجعة في الصفحة الثانية
  if (heading1Text) {
    $('h1').text(heading1Text); // إعادة عرض نص h1
  }
  if (heading2Text) {
    $('h2').text(heading2Text); // إعادة عرض نص h2
  }

  // تأثير التمرير السلس (في حال وجود روابط داخل الصفحة)
  $('a').on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});